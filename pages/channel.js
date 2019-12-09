import Link from 'next/link'
export default class extends React.Component{

  static async getInitialProps({query}){
    let idChannel = query.id

    let [reqChannel, reqAudio, reqSeries] = await Promise.all([
      fetch(`https://api.audioboom.com/channels/${idChannel}`),
      fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`),
      fetch(`https://api.audioboom.com/channels/${idChannel}/child_channels`)
    ])
    
    let dataChannel = await reqChannel.json()
    let channel = dataChannel.body.channel

    let dataAudios = await reqAudio.json()
    let audioClips = dataAudios.body.audio_clips

    let dataSeries = await reqSeries.json()
    let series = dataSeries.body.channels

    return{ channel, audioClips, series}
  }

  render(){
    const { channel, audioClips, series } = this.props

    return <div>
      <header>Podcasts</header>
      <div className="container">
      <div className="Titulo-channel">
        <h1>{channel.title}</h1>
      </div>
      <div className="box">
        { series.length > 0 &&
          <div>
            <h2>Series</h2>
            <div className="channels">
              { series.map((serie) => (
                <Link href={`/channel?id=${ serie.id }`} prefetch>
                  <a className="channel">
                    <img src={ serie.urls.logo_image.original } alt=""/>
                    <h2>{ serie.title }</h2>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        }
          <h3>Últimos Postcasts</h3>
          {audioClips.map((clip)=> (
            <Link href={`/podcast?id=${clip.id}`} prefetch key={clip.id}>
              <a className="Titles">
                <p>{ clip.title }</p>
                <div className='meta'>
                  { Math.ceil(clip.duration / 60) } minutes
                 </div>
                <img src="../static/play.png"/>
              </a>
            </Link>
          ))}
        </div>
        
      </div>
        <style jsx>{`
        header{
          color: #fff;
          background: #8756ca;
          padding: 15px;
          text-align: center;

        }
        .container{
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          background:#5E3C8D
        }
        .Titulo-channel{
          width: 100%;
          background:#5E3C8D;
        }
        h1{
          font-weight:600;
          padding:15px;
          color:white;
        }
        .box{
          width:90%;
          background:#5E3C8D;
        }
        .box h3{
          color:white;
        }
        .Titles{
          border: solid 1px;
          border-radius:20px;
          justify-content: space-between;
          margin: 2% 3%;
          display:flex;
          cursor:pointer;
          text-decoration:none;
          align-items:center;
          color:black;
          background: white;
        }
        .Titles img{
          width: 25px;
          margin:2%
        }

        `}
      </style>
      <style jsx global>{`
        body{
          margin:0;
          font-famili:system-ui;
          background: white;
        }
      `}
      </style>
    </div>
  }
}