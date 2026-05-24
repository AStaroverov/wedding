'use client';

import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Section } from './ui/Section';
import { Reveal } from './ui/Reveal';
import { Button } from './ui/Button';
import { rsvp } from '@/lib/content';

const DRINKS = ['Больше алкогольные', '50 на 50', 'Больше безалкогольные'] as const;
const TRANSPORT = ['Машина (я водитель)', 'Машина (я пассажир)', 'Такси'] as const;
const DRIVER = TRANSPORT[0];

const schema = z.object({
  name: z.string().min(2, 'Укажите имя и фамилию'),
  drinks: z.enum(DRINKS, { message: 'Выберите один вариант' }),
  transport: z.enum(TRANSPORT, { message: 'Выберите один вариант' }),
  parking: z.boolean().optional(),
  song: z.string().max(200).optional(),
  wishes: z.string().max(500).optional(),
});

type FormValues = z.infer<typeof schema>;

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '12px 16px',
  border: '1px solid var(--line)',
  borderRadius: 'var(--radius-soft)',
  background: 'var(--bg-primary)',
  color: 'var(--ink)',
  fontFamily: 'inherit',
  fontSize: 16,
};

type PillGroupProps = {
  options: ReadonlyArray<string>;
  value?: string;
  onChange: (v: string) => void;
  name: string;
};

function PillGroup({ options, value, onChange, name }: PillGroupProps) {
  return (
    <div role="radiogroup" aria-label={name} style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
      {options.map((opt) => {
        const active = value === opt;
        return (
          <button
            key={opt}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => onChange(opt)}
            style={{
              padding: '10px 18px',
              borderRadius: 'var(--radius-pill)',
              border: '1px solid var(--accent)',
              background: active ? 'var(--accent)' : 'transparent',
              color: active ? 'var(--bg-primary)' : 'var(--ink)',
              fontSize: 15,
              cursor: 'pointer',
              transition: 'background 200ms ease, color 200ms ease',
            }}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}

export function Rsvp() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle');
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { parking: false },
  });

  const transport = watch('transport');
  const showParking = transport === DRIVER;

  const onSubmit = async (values: FormValues) => {
    setStatus('sending');
    try {
      const res = await fetch('/api/rsvp', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          name: values.name,
          drinks: values.drinks,
          transport: values.transport,
          parking: showParking ? Boolean(values.parking) : undefined,
          song: values.song?.trim() || undefined,
          wishes: values.wishes?.trim() || undefined,
        }),
      });
      setStatus(res.ok ? 'ok' : 'error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <Section id="rsvp">
      <Reveal>
        <div className="stack stack-md stack-narrow">
          <div className="stack stack-center" style={{ gap: 'var(--space-3)' }}>
            <h2 className="display display-md">Вопросы для гостей</h2>
            <p className="body-muted">{rsvp.intro}</p>
          </div>

          {status === 'ok' ? (
            <p
              style={{
                textAlign: 'center',
                color: 'var(--accent)',
                fontSize: 18,
                lineHeight: 1.5,
              }}
            >
              Спасибо! Ваш ответ получен.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              style={{ display: 'grid', gap: 'var(--space-6)' }}
              aria-live="polite"
            >
              <label style={{ display: 'grid', gap: 8 }}>
                <span className="caption">Имя и фамилия</span>
                <input
                  {...register('name')}
                  style={inputStyle}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'name-err' : undefined}
                />
                {errors.name && (
                  <span id="name-err" style={{ color: '#A0463C', fontSize: 13 }}>
                    {errors.name.message}
                  </span>
                )}
              </label>

              <fieldset style={{ border: 0, padding: 0, margin: 0, display: 'grid', gap: 10 }}>
                <legend className="caption">Какие напитки вы предпочитаете?</legend>
                <Controller
                  control={control}
                  name="drinks"
                  render={({ field }) => (
                    <PillGroup
                      name="drinks"
                      options={DRINKS}
                      value={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />
                {errors.drinks && (
                  <span style={{ color: '#A0463C', fontSize: 13 }}>{errors.drinks.message}</span>
                )}
              </fieldset>

              <fieldset style={{ border: 0, padding: 0, margin: 0, display: 'grid', gap: 10 }}>
                <legend className="caption">Как вы будете добираться?</legend>
                <Controller
                  control={control}
                  name="transport"
                  render={({ field }) => (
                    <PillGroup
                      name="transport"
                      options={TRANSPORT}
                      value={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />
                {errors.transport && (
                  <span style={{ color: '#A0463C', fontSize: 13 }}>{errors.transport.message}</span>
                )}
                {showParking && (
                  <label
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      marginTop: 4,
                      color: 'var(--ink)',
                    }}
                  >
                    <input type="checkbox" {...register('parking')} />
                    <span>Нужно парковочное место</span>
                  </label>
                )}
              </fieldset>

              <label style={{ display: 'grid', gap: 8 }}>
                <span className="caption">Под какую песню точно пойдёте танцевать?</span>
                <input {...register('song')} style={inputStyle} placeholder="Название и исполнитель" />
              </label>

              <label style={{ display: 'grid', gap: 8 }}>
                <span className="caption">Есть ли у вас особые пожелания?</span>
                <textarea
                  {...register('wishes')}
                  rows={4}
                  style={{ ...inputStyle, resize: 'vertical' }}
                />
              </label>

              <div>
                <Button type="submit" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Отправляем…' : 'Отправить'}
                </Button>
              </div>

              {status === 'error' && (
                <p style={{ color: '#A0463C' }}>Ошибка отправки. Попробуйте ещё раз.</p>
              )}
            </form>
          )}
        </div>
      </Reveal>
    </Section>
  );
}
