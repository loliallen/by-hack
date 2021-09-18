import React from 'react'
import { ThemeProvider } from '@material-ui/styles'
import { AudioTranslate } from '../components/AudioTranslate/AudioTranslate'
import { Header } from '../containers/Header/Header'
import { Main } from '../containers/Main'
import { theme } from './theme'
import { Redirect, Route, Switch } from 'react-router'
import { TextAutocomplete } from '../components/TextAutocomplete'
import { DocumentTranslate } from '../components/DocumentTranslate/DocumentTranslate'
import { Navigation } from '../components/Navigation/Navigation'

export const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Header />
            <Main>
                <Navigation />
                <Switch>
                    <Route exact path='/' component={() => <Redirect to="/text" />} />
                    <Route path='/text' component={() => <TextAutocomplete />} />
                    <Route path='/doc' component={() => <DocumentTranslate />} />
                    <Route path='/audio' component={() => <AudioTranslate />} />
                </Switch>
            </Main>
        </ThemeProvider>
    )
}
