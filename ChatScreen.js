import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const ChatScreen = ({ route }) => {
    const [messages, setMessages] = useState([]);
    const [text, setText] = useState('');

    const sendMessage = () => {
        if (text) {
            setMessages([...messages, { id: Date.now(), text }]);
            setText('');
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView style={styles.messagesContainer}>
                {messages.map(message => (
                    <View key={message.id} style={styles.messageBox}>
                        <Text style={styles.messageText}>{message.text}</Text>
                    </View>
                ))}
            </ScrollView>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    value={text}
                    onChangeText={setText}
                    placeholder="Type a message..."
                />
                <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
                    <Text style={styles.sendButtonText}>Send</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
    },
    messagesContainer: {
        flex: 1,
    },
    messageBox: {
        padding: 10,
        backgroundColor: '#f0f0f0',
        marginBottom: 10,
        borderRadius: 5,
    },
    messageText: {
        fontSize: 16,
    },
    inputContainer: {
        flexDirection: 'row',
        padding: 10,
    },
    textInput: {
        flex: 1,
        borderColor: '#ccc',
        borderWidth: 1,
        marginRight: 10,
        borderRadius: 5,
        padding: 10,
    },
    sendButton: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#007bff',
        borderRadius: 5,
    },
    sendButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default ChatScreen;
