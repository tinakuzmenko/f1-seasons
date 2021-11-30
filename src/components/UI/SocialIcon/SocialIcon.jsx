const SocialIcon = (props) => {
  return (
    <a href={props.link} target="_blank">
      <img src={props.img} alt={props.alt} width={30} height={30}/>
    </a>
  )
}

export default SocialIcon;
