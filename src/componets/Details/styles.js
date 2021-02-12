import {makeStyles} from '@material-ui/core'

export default makeStyles(()=>({
    income: {
        borderBottom : '10px solid rgba(0, 255, 0, 0.5)' , //green border
        paddingBottom: '1rem'
    },
    expense: {
        borderBottom : '10px solid rgba(255, 0, 0, 0.5)', //red border
        paddingBottom: '1rem'
    }
}))