import { redirect } from 'next/navigation'

export default function Home() {
  return redirect('/productos')
}

// export default function Home() {
//   return (
//     <div>
//       Prueba
//     </div>
//   );
// }
