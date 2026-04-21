import type { RoomsInterface } from '~/interfaces/rooms'

export const Rooms: RoomsInterface = {
  'Living Room': {
    icon: 'i-lucide-house',
    primaryType: 'Normal',
    secondaryType: 'Ground',
    primaryColor: '#00367C',
    secondaryColor: '#A9CFFF'
  },
  Kitchen: {
    icon: 'i-lucide-cooking-pot',
    primaryType: 'Electric',
    secondaryType: 'Fire',
    primaryColor: '#5A5700',
    secondaryColor: '#FFFB81'
  },
  Bath: {
    icon: 'i-lucide-toilet',
    primaryType: 'Water',
    secondaryType: 'Poison',
    primaryColor: '#024767',
    secondaryColor: '#9DE0FF'
  },
  Balcony: {
    icon: 'i-lucide-bird',
    primaryType: 'Bug',
    secondaryType: 'Flying',
    primaryColor: '#346B00',
    secondaryColor: '#B7FF73'
  }
}
