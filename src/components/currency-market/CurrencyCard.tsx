
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

type Currency = {
  currency: {
    value_avg: number,
    value_sell: number,
    value_buy: number
  },
  last_update: Date
}
export default function CurrencyCard({currency, last_update}: Currency) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          Bule
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {currency.value_buy}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {currency.value_sell}
        </Typography>
        {/* <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography> */}
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
