import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';



export default function InfoBox({ info }) {

  const Rain_url = "https://media.istockphoto.com/id/1049365996/photo/rain-fall-on-the-ground.webp?b=1&s=170667a&w=0&k=20&c=7FTx-rhM7GhxLxsIqxhyjEJ-SdGdxD4td8Bwm3RpY-g=";
  const Hot_url = "https://images.unsplash.com/photo-1548017560-7fda8a680404?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90JTIwdGVtcGVyYXR1cmV8ZW58MHx8MHx8fDA%3D";
  const cold_url = "https://images.unsplash.com/photo-1687904368738-ca6423635666?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvbGQlMjB0ZW1wZXJhdHVyZXxlbnwwfHwwfHx8MA%3D%3D";


  return (
    <div className="InfoBox">
      {/* <h1>WeatherInfo - {InfoBox.weather} </h1> */}
      {/* {info.humidity > 60 ? <ThunderstormIcon /> : info.temp > 25 ? <WbSunnyIcon /> : <AcUnitIcon />} */}
      <div className='infoCard'>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={info.humidity > 60 ? Rain_url : info.temp > 25 ? Hot_url : cold_url}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
              {info.humidity > 60 ? <ThunderstormIcon /> : info.temp > 25 ? <WbSunnyIcon /> : <AcUnitIcon />}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <p> City : {info.city}</p>
              <p> temperature:{info.temp}&deg;C</p>
              <p> humidity:{info.humidity}</p>
              <p>  Max temperature:{info.tempMax}&deg;C</p>
              <p>  Min temperature:{info.tempMin}&deg;C</p>
              <p> The weather can be described as <i>{info.weather}</i> feels like {info.feels_like} &deg;C</p>
            </Typography>
          </CardContent>

        </Card>
      </div>
    </div>
  );
}