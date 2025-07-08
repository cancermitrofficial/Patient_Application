import React from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { increment,decrement } from '../../features/counter/counterSlice';

export default function HomeScreen() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <View>
            <Text>Count: {count}</Text>
            <Button title="Increment" onPress={() => dispatch(increment())} />
            <Button title="Decrement" onPress={() => dispatch(decrement())} />
        </View>
    );
}
