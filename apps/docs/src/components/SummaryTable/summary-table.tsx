interface SummaryTableProps {
  name: string;
  type: string;
  path: string;
}

const REPO_URL = `https://github.com/benwainwright/hass-blocks/blob/main`;

export const SummaryTable = ({ name, type, path }: SummaryTableProps) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <td>{name}</td>
        </tr>
        <tr>
          <th>Type</th>
          <td>{type}</td>
        </tr>
        <tr>
          <th>Path</th>
          <td>
            <a href={`${REPO_URL}/${path}`}>{path}</a>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
