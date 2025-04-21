import { RichTextEntry } from 'ts-markdown';
import { RichText } from '../RichText';

interface Member {
  name: string;
  kind: string;
  description: RichTextEntry;
}

export interface MemberTableProps {
  members: Member[];
}

export const MemberTable = ({ members }: MemberTableProps) => {
  return (
    <table>
      <tbody>
        {members.map((member) => (
          <tr>
            <td>{member.name}</td>
            <td>
              <RichText>{member.description}</RichText>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
