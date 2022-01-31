const SocialLink = ({link, src, alt, width = 30, height = 30}) => {
  return (
    <a href={link} target="_blank" noopener="true">
      <img src={src} alt={alt} width={width} height={height}/>
    </a>
  )
}

export default SocialLink;
