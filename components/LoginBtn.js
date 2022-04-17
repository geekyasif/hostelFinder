import { StyleSheet, Text, View, Button } from 'react-native'
import Seperator from './Seperator'

const LoginBtn = () => {
    return (
        <View >
            <Button
                color="#2E86C1"
                title='Sign in with Phone' />
            <Seperator/>
            <Button
                color="#E74C3C"
                title='Sign in with Google' />
        </View>
    )
}

export default LoginBtn

const styles = StyleSheet.create({

})