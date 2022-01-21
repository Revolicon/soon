export function Arrow(props) {
  return (
    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M10.665 2.628a.5.5 0 0 1 .707.038l4.5 5a.5.5 0 0 1 0 .668l-4.5 5a.5.5 0 0 1-.744-.668l3.75-4.166H.5a.5.5 0 1 1 0-1h13.877l-3.749-4.166a.5.5 0 0 1 .037-.706Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function Check(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0z"
      />
    </svg>
  )
}

export function Loading(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <circle
        style={{
          opacity: 0.25,
        }}
        cx={12}
        cy={12}
        r={10}
        stroke="currentColor"
        strokeWidth={4}
      />
      <path
        style={{
          opacity: 0.75,
        }}
        fill="currentColor"
        d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  )
}
