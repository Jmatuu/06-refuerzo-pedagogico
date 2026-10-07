import { BotonContador } from '@/components/BotonContador';
import { ContadorDisplay } from '@/components/ContadorDisplay';
import { calcularValor, estadoUI, type ContadorConfig } from '@/domain/counter';
import { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Home() {
  // 🔎 Arranca en 0 porque al abrir el bar aún no se ha vendido nada.
  //    Si empezara en otro valor, la app mostraría ese número desde el inicio.
  const [valor, setValor] = useState(0);

  // 🔎 `valor` viene del estado porque cambia con cada toque; paso, minimo y
  //    maximo son reglas fijas del contador.
  const config: ContadorConfig = { valor, paso: 1, minimo: 0, maximo: 10 };

  // 🔎 `estado` se calcula (estado derivado): se obtiene de `valor`, así nunca
  //    queda desincronizado y no hace falta otro useState.
  const estado = estadoUI(valor, config);

  const incrementar = () => {
    setValor(calcularValor(config, 'incrementar'));
  };
  const decrementar = () => {
    setValor(calcularValor(config, 'decrementar'));
  };
  const reiniciar = () => {
    setValor(0);
  };

  // --- Empanadas ---
  const [empanadas, setEmpanadas] = useState(0);
  const configEmpanadas: ContadorConfig = { valor: empanadas, paso: 1, minimo: 0, maximo: 10 };
  const estadoEmpanadas = estadoUI(empanadas, configEmpanadas);
  const incrementarEmpanadas = () => {
    setEmpanadas(calcularValor(configEmpanadas, 'incrementar'));
  };
  const decrementarEmpanadas = () => {
    setEmpanadas(calcularValor(configEmpanadas, 'decrementar'));
  };
  const reiniciarEmpanadas = () => {
    setEmpanadas(0);
  };

  // --- Jugos ---
  const [jugos, setJugos] = useState(0);
  const configJugos: ContadorConfig = { valor: jugos, paso: 1, minimo: 0, maximo: 10 };
  const estadoJugos = estadoUI(jugos, configJugos);
  const incrementarJugos = () => {
    setJugos(calcularValor(configJugos, 'incrementar'));
  };
  const decrementarJugos = () => {
    setJugos(calcularValor(configJugos, 'decrementar'));
  };
  const reiniciarJugos = () => {
    setJugos(0);
  };

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Bar Salesiano · Contadores</Text>

        {/* Sanduches */}
        <ContadorDisplay valor={valor} etiqueta="Sanduches" />
        <View style={styles.actions}>
          <BotonContador
            label="+1"
            onPress={incrementar}
            variante="primary"
            disabled={estado === 'MAXIMO'}
          />
          <BotonContador
            label="-1"
            onPress={decrementar}
            variante="secondary"
            disabled={estado === 'MINIMO'}
          />
          <BotonContador label="Reiniciar" onPress={reiniciar} variante="danger" />
        </View>

        {/* Empanadas */}
        <ContadorDisplay valor={empanadas} etiqueta="Empanadas" />
        <View style={styles.actions}>
          <BotonContador
            label="+1"
            onPress={incrementarEmpanadas}
            variante="primary"
            disabled={estadoEmpanadas === 'MAXIMO'}
          />
          <BotonContador
            label="-1"
            onPress={decrementarEmpanadas}
            variante="secondary"
            disabled={estadoEmpanadas === 'MINIMO'}
          />
          <BotonContador label="Reiniciar" onPress={reiniciarEmpanadas} variante="danger" />
        </View>

        {/* Jugos */}
        <ContadorDisplay valor={jugos} etiqueta="Jugos" />
        <View style={styles.actions}>
          <BotonContador
            label="+1"
            onPress={incrementarJugos}
            variante="primary"
            disabled={estadoJugos === 'MAXIMO'}
          />
          <BotonContador
            label="-1"
            onPress={decrementarJugos}
            variante="secondary"
            disabled={estadoJugos === 'MINIMO'}
          />
          <BotonContador label="Reiniciar" onPress={reiniciarJugos} variante="danger" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#EFE6D6',
  },
  content: {
    padding: 20,
    gap: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '900',
    textTransform: 'uppercase',
    color: '#0A0A0A',
  },
  actions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    justifyContent: 'center',
  },
});