import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Modalidades from './source/screens/ModalidadeScreen';
import DetalhesCurso from './source/screens/DetalhesScreen';
import Cursos from './source/screens/CursosScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Modalidades"
          component={Modalidades}
          options={{ title: 'Lista de Modalidades' }} />
        <Stack.Screen
          name="Cursos"
          component={Cursos}
          options={{ title: 'Lista de Cursos' }} />
        <Stack.Screen
          name="Detalhes"
          component={DetalhesCurso}
          options={{ title: 'Detalhes' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}