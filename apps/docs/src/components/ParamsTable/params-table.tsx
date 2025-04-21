import CodeBlock from '@theme/CodeBlock';
import styles from './params-table.module.css';

interface Param {
  name: string;
  type: string;
}

interface ParamsTableProps {
  params: Param[];
}

export const ParamsTable = ({ params }: ParamsTableProps) => {
  return (
    <table>
      <tbody>
        {params.map((param) => (
          <tr key={`param-${param.name}-row`}>
            <td>{param.name}</td>
            <td>
              <CodeBlock className={styles.codeBlock}>{param.type}</CodeBlock>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
