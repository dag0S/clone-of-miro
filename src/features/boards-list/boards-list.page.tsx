import { href, Link } from "react-router-dom";

import { ROUTES } from "@/shared/model/routes";
import { rqClient } from "@/shared/api/instance";

function BoardsListPage() {
  const boardsQuery = rqClient.useQuery("get", "/boards");

  return (
    <div>
      <h1>Boards list</h1>
      {boardsQuery.data?.map((board) => (
        <Link to={href(ROUTES.BOARD, { boardId: board.id })}>{board.name}</Link>
      ))}
    </div>
  );
}

export const Component = BoardsListPage;
