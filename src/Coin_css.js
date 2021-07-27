import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    coin_div: {
        flexGrow: 1,
    },
    coin_grid: {
        padding: '25px',
        marginBottom: '20px',
        borderRadius: '3px',
        backgroundColor: '#1a1a1c',
        '&:hover': {
            backgroundColor: '#2a067e',
        },
    },
    coin_rank: {
        marginBottom: '10px',
    },
    coin_container: {
        direction: 'row',
        alignItems: 'center',
        justify: 'center'
    },
    coin: {
        [theme.breakpoints.down('md')]: {
            textAlign: 'center',
        },
        '& img': {
            height: '50px',
            width: '50px',
        },
        '& h2': {
            marginTop: '10px',
            marginBottom: '20px',
        },
        '& p': {
            textTransform: 'uppercase',
            marginBottom: '15px',
        }
    },
    coin_data: {
        '& sub': {
            color: 'gray',
            '& span': {
                color: 'white',
                backgroundColor: 'gray',
                padding: '2px',
                borderRadius: '5px',
            },
        },
        '& hr': {
            marginTop: '5px',
            border: '1px solid gray',
        },
        '& p': {
            fontSize: '18px',
            textAlign: 'end',
            marginTop: '10px',
        },
    },
}));

export default useStyles
