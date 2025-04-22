import { RichTextEntry } from 'ts-markdown';
import { RichText } from '../RichText';

interface Member {
  name: string;
  url: string;
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
            <td>
              <a href={member.url}>{member.name}</a>
            </td>
            <td>
              <RichText>{member.description}</RichText>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
