interface ScrollingTextProps {
  items: { count: number; label: string }[];
}

const ScrollingText: React.FC<ScrollingTextProps> = ({ items }) => {
  return (
    <div className="scrolling-text">
      {items.map((item, index) => (
        <div
          key={index}
          className="scrolling-text__item"
          style={{ animationDelay: `${index * 0.8}s` }}
        >
          <p className="scrolling-text__count">{item.count}</p>
          <p className="scrolling-text__label">{item.label}</p>
        </div>
         
      ))}
      <span className="scrolling-text__border" />
    </div>
  );
};

export default ScrollingText;
