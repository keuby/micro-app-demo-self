const React18Child: React.FC = () => {
  return (
    <div className="flex flex-col h-full">
      <div>react18 iframe child</div>
      <div className="flex-1 h-0">
        <micro-app
          class="h-full"
          url="http://localhost:3001/"
          name="react18-iframe"
          iframe={true}
          baseroute="/react18-iframe"
        ></micro-app>
      </div>
    </div>
  );
};

export default React18Child;
