'use client'

import { Button } from '@/components/ui/button'

export default function SettingsPage() {
  function openApiSettingsWindow() {
    const features = [
      'width=1440',
      'height=1080',
      'toolbar=no',
      'menubar=no',
      'location=no',
      'status=no',
      'scrollbars=yes',
      'resizable=yes',
    ].join(',');

    const org = encodeURIComponent('Lorem Ipsum')
    window.open(`/settings/api?org=${org}`, 'ApiSettings', features);
  }

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10">
      <h1 className="mb-4 text-xl font-bold tracking-tight">Settings</h1>
      <p className="mb-6 text-sm text-muted-foreground">
        API Settings now open in a dedicated window.
      </p>
      <Button
        onClick={openApiSettingsWindow}
        leftIcon={<img src="/images/icon_small_edit_button_x2.png" alt="" className="h-4 w-4" aria-hidden="true" />}
      >
        Open API Settings
      </Button>
    </div>
  )
}

