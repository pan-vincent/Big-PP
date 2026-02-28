const UI = {
  body: S(document.body),
  elements:{
    panel: undefined,
    options: undefined,
    interface: undefined,
    interface_wrapper: undefined,
  },
  do: type=>{
    if(type=='clear'){
      UI.elements.interface_wrapper.style("max-height", "0");
      UI.elements.interface_wrapper.style("mask-position", "100% 100%");
      return;
    }
    UI.elements.interface.only(S("h2").text(" ABOBA SOSE BIBU ABOBA SOSE BIBU ABOBA SOSE BIBU ABOBA SOSE BIBU ABOBA SOSE BIBU ABOBA SOSE BIBU ABOBA SOSE BIBU ABOBA SOSE BIBU ABOBA SOSE BIBU ABOBA SOSE BIBU ABOBA SOSE BIBU ABOBA SOSE BIBU ABOBA SOSE BIBU ABOBA SOSE BIBU ABOBA SOSE BIBU ABOBA SOSE BIBU ABOBA SOSE BIBU ABOBA SOSE BIBU ABOBA SOSE BIBU ABOBA SOSE BIBU ABOBA SOSE BIBU ABOBA SOSE BIBU ABOBA SOSE BIBU ABOBA SOSE BIBU ABOBA SOSE BIBU ABOBA SOSE BIBU"));
    UI.elements.interface_wrapper.style("max-height", UI.elements.interface.size.y+'px');
    UI.elements.interface_wrapper.style("mask-position", "100% 0%");
    
    
  },
  load: {
    panel: () =>
      S("div").id("panel").with(S("h1").id("panel-title").text("Big-PP")),
    interface: ()=> S("div").id("panel-interface-wrapper").with(S("div").id("panel-interface")),
    options: () => {
      const tag = ["create", "join", "test", "archive"];
      const color = ["pink", "yellow", "green", "blue"];
      const text = ["Create Battlefield", "Join War", "Test", "Archive"];

      const options = Array.from({ length: 4 }, (_, i) => {
        const path = `../res/miku_${tag[i]}.jpg`;

        const div = S("div")
          .set("backup", tag[i])
          .style("backgroundColor", `var(--color-sticky-notes-${color[i]})`)
          .with(
            S("h2").text(text[i]).set("backup", text[i]),
            S("img").src(path).set("backup", path),
          );
        return div;
      });

      options.forEach((option) => {
        option.handler("click", (e) => {
          const undo = option.get("activated");
          for (let j = 0; j < options.length; j++) {
            const [h2, img] = options[j].children;
            h2.text(h2.get("backup"));
            img.src(img.get("backup")); 
            option.set("activated", false);
          }
          if(undo){
            UI.do('clear');
            return;
          }
          const [h2, img] = option.children;
          h2.text("Home");
          img.src("../res/miku_home.jpg");
          option.set("activated", true);
          UI.do(option.get("backup"));
        });
      });
      return S("div")
        .id("panel-options")
        .with(...options);
    },
    home: () => {
      UI.elements.panel = UI.load.panel();
      UI.elements.interface_wrapper = UI.load.interface().add_to(UI.elements.panel);
      UI.elements.interface = UI.elements.interface_wrapper.children[0];
      UI.elements.options = UI.load.options().add_to(UI.elements.panel);
      
      
      UI.body.with(UI.elements.panel);
    },
  },
};
