'use client'

import { useMemo, useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { ValidationError } from '@/components/ui/validation-error'

type VisibilityField = {
  id: string
  label: string
  visible: boolean
}

type SettingsModel = {
  organization: {
    name: string
    id: string
  }
  primaryClientNameValid: boolean
  sections: Array<{
    id: string
    title: string
    fields: VisibilityField[]
  }>
}

function StatusPill({ visible }: { visible: boolean }) {
  return (
    <span
      className={cn(
        'inline-flex items-center h-6 rounded-[4px] px-2.5 text-xs font-semibold border text-[var(--color-cool-gray-1000)]',
        'min-w-16 justify-center text-center',
        visible
          ? 'bg-[var(--color-green-100)] border-[var(--color-green-300)]'
          : 'bg-[var(--color-cool-gray-50)] border-[var(--color-cool-gray-400)]'
      )}
    >
      {visible ? 'Visible' : 'Hidden'}
    </span>
  )
}

function FieldRow({
  field,
  mode,
  onToggle,
}: {
  field: VisibilityField
  mode: 'view' | 'edit'
  onToggle?: (id: string) => void
}) {
  return (
    <div className="flex items-center justify-between gap-4 py-2">
      <div className="flex items-center gap-3">
        {mode === 'edit' && (
          <input
            aria-label={`${field.label} visibility`}
            type="checkbox"
            className="h-4 w-4 rounded border-input [accent-color:var(--color-blue-600)]"
            checked={field.visible}
            onChange={() => onToggle?.(field.id)}
          />
        )}
        <span className="text-sm">{field.label}</span>
      </div>
      <StatusPill visible={field.visible} />
    </div>
  )
}

export function ApiSettings() {
  const initialSettings: SettingsModel = useMemo(
    () => ({
      organization: {
        name: 'ABC Organization Global Inc.',
        id: '12345',
      },
      primaryClientNameValid: false,
      sections: [
        {
          id: 'fieldVisibility',
          title: 'Field Visibility',
          fields: [
            { id: 'meetingId', label: 'Meeting ID', visible: true },
            { id: 'meetingStartTime', label: 'Meeting Start Time', visible: false },
            { id: 'title', label: 'Title', visible: true },
            { id: 'caseCode', label: 'Case Code', visible: true },
            { id: 'dealCode', label: 'Deal Code', visible: true },
            { id: 'angle', label: 'Angle', visible: false },
          ],
        },
        {
          id: 'advisor',
          title: 'Advisor',
          fields: [
            { id: 'advisorFirstName', label: 'Advisor First Name', visible: false },
            { id: 'advisorMiddleInitial', label: 'Middle Initial', visible: false },
            { id: 'advisorLastName', label: 'Advisor Last Name', visible: false },
            { id: 'advisorId', label: 'Advisor ID', visible: false },
            { id: 'advisorTitle', label: 'Advisor Title', visible: false },
          ],
        },
      ],
    }),
    []
  )

  const [mode, setMode] = useState<'view' | 'edit'>('view')
  const [settings, setSettings] = useState<SettingsModel>(initialSettings)
  const [draft, setDraft] = useState<SettingsModel>(initialSettings)

  function startEditing() {
    setDraft(structuredClone(settings))
    setMode('edit')
  }

  function save() {
    setSettings(draft)
    setMode('view')
  }

  function cancel() {
    setDraft(structuredClone(settings))
    setMode('view')
  }

  function toggleField(sectionId: string, fieldId: string) {
    setDraft((prev) => ({
      ...prev,
      sections: prev.sections.map((s) =>
        s.id === sectionId
          ? {
              ...s,
              fields: s.fields.map((f) =>
                f.id === fieldId ? { ...f, visible: !f.visible } : f
              ),
            }
          : s
      ),
    }))
  }

  const active = mode === 'edit' ? draft : settings

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-8">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold tracking-tight">API settings</h1>
          <p className="text-sm text-muted-foreground">Expert Network Content API</p>
        </div>
        <div className="flex items-center gap-2">
          {mode === 'edit' ? (
            <>
              <Button onClick={save}>Save</Button>
              <Button variant="secondary" onClick={cancel}>
                Cancel
              </Button>
            </>
          ) : (
            <Button variant="outline" onClick={startEditing}>
              Edit Mode
            </Button>
          )}
        </div>
      </div>

      {!active.primaryClientNameValid && (
        <ValidationError className="mb-6" />
      )}

      <div className="grid gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-3">
            <CardTitle>Organization</CardTitle>
            <div className="flex items-center gap-2 text-[var(--color-cool-gray-1000)]">
              <img
                src="/images/icon_small_alert_diamond_x2.png"
                alt=""
                className="h-4 w-4"
              />
              <span className="whitespace-nowrap text-sm">This section cannot be edited</span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex items-baseline gap-2">
                <div
                  className="text-sm font-semibold text-[var(--color-cool-gray-1000)]"
                  style={{ fontFamily: 'Avenir Next, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif' }}
                >
                  Organization name:
                </div>
                <div className="text-sm font-medium text-[var(--color-cool-gray-1000)]">
                  {active.organization.name}
                </div>
              </div>
              <div className="flex items-baseline gap-2">
                <div
                  className="text-sm font-semibold text-[var(--color-cool-gray-1000)]"
                  style={{ fontFamily: 'Avenir Next, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif' }}
                >
                  Organization ID:
                </div>
                <div className="text-sm font-medium text-[var(--color-cool-gray-1000)]">
                  {active.organization.id}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {active.sections.map((section) => (
          <Card key={section.id}>
            <CardHeader>
              <CardTitle>{section.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="divide-y divide-black/10 dark:divide-white/10">
                {section.fields.map((f) => (
                  <FieldRow
                    key={f.id}
                    field={f}
                    mode={mode}
                    onToggle={(id) => toggleField(section.id, id)}
                  />)
                )}
              </div>
            </CardContent>
            {mode === 'edit' && (
              <CardFooter className="text-xs text-muted-foreground">
                Toggle checkboxes to set each field to Visible or Hidden
              </CardFooter>
            )}
          </Card>
        ))}

        <Card>
          <CardHeader>
            <CardTitle>API Key</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <Button
                className=""
                onClick={() => {
                  // placeholder action for iteration 1
                }}
              >
                Request API Key
              </Button>
              <p className="text-[14px] leading-[1.375em] text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default ApiSettings

