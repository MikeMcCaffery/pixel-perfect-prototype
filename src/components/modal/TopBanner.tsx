'use client'

import Image from 'next/image'
import { useSearchParams } from 'next/navigation'

export default function TopBanner() {
  const searchParams = useSearchParams()
  const organizationName = searchParams.get('org')?.trim() || 'Lorem Ipsum'

  return (
    <div className="h-[72px] w-full bg-white border-b border-black/10 flex items-center justify-between px-12">
      <div className="flex items-center gap-4 min-w-0">
        <Image
          src="/images/MFE_LOGO.png"
          alt="Logo"
          width={64}
          height={16}
          className="h-4 w-auto"
          priority
        />
        <div className="h-6 w-px bg-black/10" />
        <div className="truncate text-base font-bold tracking-tight text-[var(--color-cool-gray-1000)]">
          Organization Settings
        </div>
      </div>
      <div className="rounded-full border border-black/10 bg-white/70 px-3 py-1 text-sm text-[var(--color-cool-gray-1000)]">
        <span className="opacity-80">Organization: </span>
        <span className="font-semibold">{organizationName}</span>
      </div>
    </div>
  )
}

