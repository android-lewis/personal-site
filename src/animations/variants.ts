/**
 * Shared Framer Motion animation variants used across components.
 * Centralized here to ensure consistency and avoid re-creation on each render.
 */

export const ANIMATION_VARIANTS = {
  /**
   * Container variant for staggered children animations
   */
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  },

  /**
   * Left slide animation (typically for text content)
   */
  itemLeftSlide: {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  },

  /**
   * Bottom slide animation (typically for cards)
   */
  itemBottomSlide: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  },

  /**
   * Button interaction animations
   */
  button: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.95 },
  },

  /**
   * Card hover animation
   */
  cardHover: {
    hover: {
      y: -10,
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
      transition: { duration: 0.3 },
    },
  },

  /**
   * Tech badge animation
   */
  techBadge: (i: number) => ({
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
      },
    },
  }),
}
