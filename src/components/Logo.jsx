// The Virgil seal: an engraved portrait of the poet in a Roman coin.
// The source is the public-domain Vatican bust (see public/art/).
export default function Logo({ size = 40, className = '' }) {
  return (
    <img
      className={className}
      src={`${import.meta.env.BASE_URL}icons/virgil-medallion.svg`}
      width={size}
      height={size}
      alt=""
      aria-hidden="true"
      decoding="async"
    />
  )
}
