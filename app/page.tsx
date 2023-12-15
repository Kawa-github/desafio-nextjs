import Link from "next/link";
import "./css/Assessment.css"; 

export const dynamic = "force-dynamic";

export default async function Home() {
  const response = await fetch("http://localhost:3000/api/ranking");
  const { ranking } = await response.json();

  return (
    <main className="container mx-auto p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex-grow m-10">
          <h5>Assessments</h5>
          <h1 className="mt-20 mb-10">Implementar Figma em React</h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">React</button>
        </div>
        <div>
          <Link href={"/assessment"} className="btn-assessment px-4 py-2 rounded">
            Realizar Assessment
          </Link>
        </div>
      </div>

      <h1 className="text-lg font-medium">Ranking</h1>

      <table className="table-auto w-full">
        <thead className="bg-gray-200">
          <tr>
            <th className="text-sm font-normal py-2">Usuário</th>
            <th className="text-sm font-normal py-2">Pontuação</th>
          </tr>
        </thead>
        <tbody>
          {ranking.map(
            (userScore: { userName: string; score: number }, index: number) => {
              return (
                <tr key={index}>
                  <td>{userScore.userName}</td>
                  <td>{userScore.score}</td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </main>
  );
}
