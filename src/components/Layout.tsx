type lay = {
    //for type component
    children: React.ReactNode;
};

function Layout(props: lay) {
  return (
    
    <div>
    {props.children}    
    </div>
  );
}

export default Layout;