const SocialLink = ({link, src, alt, width = 30, height = 30}) => {
  return (
    <a href={link} target="_blank">
      <img src={src} alt={alt} width={width} height={height} noopener="true"/>
    </a>
  )
}

export default SocialLink;
