import Link from "next/link";
import "./css/App.css"



export const dynamic = "force-dynamic";

export default async function Home() {
  const response = await fetch("http://localhost:3000/api/ranking");
  const { ranking } = await response.json();

  return (
    <main className="container mx-auto p-4">
      <link href='https://fonts.googleapis.com/css?family=Lato:400,700' rel='stylesheet' type='text/css'></link>
      <div className="flex items-center justify-between mb-4 p-16 top-home">
        <div className="flex-grow m-10">
          <h5>Assessments</h5>
          <h1 className="mt-10 mb-10 txt-home">Implementar Figma em React</h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">React</button>
        </div>
        <div>
          <Link href={"/assessment"} className="btn-assessment rounded">
            Realizar Assessment
          </Link>
        </div>
      </div>

      <div className="table-home m-10">
            <h1 className="text-lg font-medium mb-10">Ranking de Pontuação</h1>
            <table className="w-96">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">Posição</th>
                  <th className="py-2 px-4 border-b">Usuário</th>
                  <th className="py-2 px-4 border-b">Pontuação</th>
                </tr>
              </thead>
              <tbody>
                {ranking.map(
                  (userScore: { userName: string; score: number }, index: number) => (
                    <tr key={index}>
                      <td className="py-2 px-4 border-b">{index + 1}</td>
                      <td className="py-2 px-4 border-b">{userScore.userName}</td>
                      <td className="py-2 px-4 border-b">{userScore.score}</td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
    </main>
  );
}
