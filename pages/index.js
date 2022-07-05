import Head from 'next/head'
import Image from 'next/image'
import { useGlobalContextUpdater } from '../app-state/global-context'
import styles from '../styles/Home.module.css'

export default function Home({customValue, isSSR}) {
  const update = useGlobalContextUpdater();

  if(isSSR) {
    update({customValue})
  }
  return (
    <div>MAIN INDEX WORKS</div>
  );
}

export async function getServerSideProps(context){
  const customValue = await Promise.resolve({text: 'I am the header'})
  const isSSR = !context?.req?.includes?.('_next/');

  return {
      props: { customValue , isSSR}
  };
};
