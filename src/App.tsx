import db from './db.json';

export const App = () => {
  const entries = db;
  console.log(entries);

  return (
    <div>
      {entries.map(entry => (
        <a href={entry.link} key={entry.id}>
          {entry.title}
        </a>
      ))}
    </div>
  );
};
