export default class extends React.Component{

  static async getInitialProps({query}){
    let idChannel = query.id
    let reqChannel = await fetch
    (`https://api.audioboom.com/channels/${idChannel}`)
    let dataChannel = await reqChannel.json()
    let channel = dataChannel.body.channel

    let reqAudio = await fetch
    (`https://api.audioboom.com/channels/${idChannel}/audio_clips`)
    let dataAudios = await reqAudio.json()
    let audioClips = dataAudios.body.audio_clips

    let reqSeries = await fetch
    (`https://api.audioboom.com/channels/${idChannel}/child_channels`)
    let dataSeries = await reqSeries.json()
    let series = dataSeries.body.channels

    return{ channel, audioClips, series}
  }

  render(){
    const { channel, audioClips, series } = this.props

    return <div>
      <header>Podcasts</header>
      <div className="container">
        <div>
          <h1>{channel.title}</h1>
          <h3>Series</h3>
          {audioClips.map((serie)=> (
            <div>{ serie.title }</div>
          ))}
          <h3>Últimos Postcasts</h3>
          {audioClips.map((clip)=> (
            <div>{ clip.title }</div>
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
          justify-content: space-around;
        }
        h1{
          font-weight:600;
          padding:15px;
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