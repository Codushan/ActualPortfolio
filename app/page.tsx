import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/Main'); // This will redirect to /main on first render
}