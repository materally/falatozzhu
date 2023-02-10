import { StyleSheet, TextInput, TextInputProps, View, Text } from "react-native";

interface InputProps extends TextInputProps {
  title: string;
  error: boolean;
}

export type InputValue = string | undefined; 

export const Input = ({ title, error, ...props }: InputProps) => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput style={styles.input} {...props} />
      {
        error ? <Text style={styles.error}>Kötelező mező!</Text> : null
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },

  title: {
    fontWeight: 'bold',
    paddingBottom: 5
  },

  input: {
    color: '#333',
    borderWidth: 1,
    borderColor: '#999',
    borderStyle: 'solid',
    padding: 7,
    borderRadius: 3
  },

  error: {
    color: 'red',
    fontSize: 11
  }
});