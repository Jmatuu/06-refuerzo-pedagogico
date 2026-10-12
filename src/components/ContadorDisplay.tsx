import { StyleSheet, Text, View } from 'react-native';
export interface ContadorDisplayProps {
  valor: number;
  etiqueta?: string;
}
export function ContadorDisplay({ valor, etiqueta }: ContadorDisplayProps) {
  return (
    <View style={styles.wrap}>
      {etiqueta ? <Text style={styles.etiqueta}>{etiqueta}</Text> : null}
      <Text style={styles.valor}>{valor}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    alignItems: 'center',
    padding: 16,
    borderWidth: 3,
    borderColor: '#0A0A0A',
    borderRadius: 12,
    backgroundColor: '#FFFDF9',
  },
  etiqueta: {
    fontSize: 13,
    fontWeight: '700',
    textTransform: 'uppercase',
    color: '#0A0A0A',
  },
  valor: {
    fontSize: 44,
    fontWeight: '900',
    color: '#0A0A0A',
  },
});