import React from 'react'
import {Grid} from '@material-ui/core'
import Details from './componets/Details/Details'
import Main from './componets/Main/Main'
import useStyles from './styles'
import { PushToTalkButton, PushToTalkButtonContainer, ErrorPanel} from '@speechly/react-ui'
import {useSpeechContext} from '@speechly/react-client'


const App = ()=> {
    const classes = useStyles()
    const {speechState,toggleRecording} = useSpeechContext()
    return (
        <div>
            <Grid className={classes.grid} container spacing = {0} alignItems='center' justify='center' style={{height:'100vh'}}>
                <Grid item xs={12} sm={4} className={classes.mobile}>
                    <Details title='Income'/>
                </Grid>
                <Grid item xs={12} sm={3} className={classes.main}>
                    <Main />
                </Grid>
                <Grid item xs={12} sm={4} className={classes.desktop}>
                    <Details title='Income'/>
                </Grid>
                <Grid item xs={12} sm={4} className={classes.last}>
                    <Details title='Expense'/>
                </Grid>
            </Grid>
        </div>
    )
}

export default App