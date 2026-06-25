import { EVENT, CONTACT, SEO } from '../constants/content'

export function generateCalendarLink(): string {
  const start = new Date(EVENT.countdownTarget)
  const end = new Date(start.getTime() + 4 * 60 * 60 * 1000)
  const format = (d: Date) =>
    d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')

  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: 'Parth & Priya Engagement',
    dates: `${format(start)}/${format(end)}`,
    details: `Join us for our engagement ceremony!\n\nVenue: ${EVENT.venue.address}`,
    location: EVENT.venue.address,
  })

  return `https://calendar.google.com/calendar/render?${params.toString()}`
}

export function getWhatsAppShareUrl(message?: string): string {
  const text =
    message ??
    `You're invited to Parth & Priya's Engagement on ${EVENT.date}! ${SEO.url}`
  return `https://wa.me/?text=${encodeURIComponent(text)}`
}

export function getWhatsAppContactUrl(): string {
  return `https://wa.me/${CONTACT.whatsapp}`
}

export function getPhoneUrl(): string {
  return `tel:${CONTACT.phone}`
}

export function getMapsUrl(): string {
  return EVENT.venue.mapsUrl
}

export function padNumber(n: number): string {
  return n.toString().padStart(2, '0')
}

export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ')
}

export async function downloadInvitation(element: HTMLElement, filename = 'invitation.png') {
  const html2canvas = (await import('html2canvas')).default
  const canvas = await html2canvas(element, {
    scale: 2,
    useCORS: true,
    backgroundColor: '#FAF7F2',
  })
  const link = document.createElement('a')
  link.download = filename
  link.href = canvas.toDataURL('image/png')
  link.click()
}

export async function shareInvitation() {
  const shareData = {
    title: SEO.title,
    text: `You're invited to Parth & Priya's Engagement on ${EVENT.date}!`,
    url: SEO.url,
  }

  if (navigator.share) {
    try {
      await navigator.share(shareData)
    } catch {
      /* user cancelled */
    }
  } else {
    await navigator.clipboard.writeText(`${shareData.text} ${shareData.url}`)
  }
}
