"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

type AppFooterProps = {
  userFullName: string
  paddingXClassName?: string
}

function formatLastModifiedForET(date: Date): string {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).formatToParts(date)

  const get = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((p) => p.type === type)?.value

  const year = get("year") ?? ""
  const month = get("month") ?? ""
  const day = get("day") ?? ""
  const hour = get("hour") ?? ""
  const minute = get("minute") ?? "00"
  const dayPeriod = (get("dayPeriod") ?? "").toLowerCase()

  return `${year}-${month}-${day} ${hour}:${minute}${dayPeriod} ET`
}

export function AppFooter({ userFullName, paddingXClassName = "px-4" }: AppFooterProps) {
  const [lastModifiedText, setLastModifiedText] = useState<string>("")
  const pathname = usePathname()
  const isSettings = pathname?.startsWith("/settings")

  useEffect(() => {
    try {
      const modified = new Date(document.lastModified)
      if (!isNaN(modified.getTime())) {
        setLastModifiedText(`Last modified: ${formatLastModifiedForET(modified)}`)
      }
    } catch {
      // ignore
    }
  }, [])

  const currentYear = new Date().getFullYear()

  return (
    <footer
      className={
        `w-full bg-background py-4 ${
          isSettings ? "[--background:#F0F0F3] [--foreground:#1C2024]" : ""
        }`
      }
    >
      <div className={cn("mx-auto w-full", paddingXClassName)}>
        <div className="flex flex-col gap-2 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <div>© {currentYear} Guidepoint Global, LLC</div>
          <div>
            {lastModifiedText}
            {lastModifiedText ? ` by ${userFullName}` : null}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default AppFooter

