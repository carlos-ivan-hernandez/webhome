import {flatten, uniq} from 'ramda';
import {FlexCol} from './components/FlexCol.tsx';
import {entries} from './db.ts';

export const App = () => {
  const tags = uniq(flatten(entries.map(entry => entry.tags)));

  return (
    <FlexCol className="p-4 gap-3">
      {tags.map(tag => (
        <div key={tag}>
          <div>{tag}</div>
          <div>
            {entries
              .filter(entry => entry.tags.includes(tag))
              .map(entry => (
                <div key={entry.id}>
                  <a href={entry.link}>{entry.title}</a>
                </div>
              ))}
          </div>
        </div>
      ))}
    </FlexCol>
  );
};
