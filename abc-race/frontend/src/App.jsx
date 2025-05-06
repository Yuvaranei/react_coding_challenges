import { ApolloProvider } from "@apollo/client";
import client from "./services/apolloClient";
import RacerList from "./components/TopRacer";
import LanguageSwitcher from './components/LanguageSwitcher';
import ThemeToggle from './components/ThemeToggle';
import './App.css'
import './i18n'

export default function App() {
  return (
    <ApolloProvider client={client}>
        <LanguageSwitcher />
        <ThemeToggle />
        <RacerList />
    </ApolloProvider>
  );
}

