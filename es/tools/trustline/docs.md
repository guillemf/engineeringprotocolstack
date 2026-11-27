---
layout: default
title: "Guía de Usuario de Trustline y Documentación del Protocolo LAN"
subtitle: "La capa LAN de The Engineering Protocol Stack"
description: "Guía completa y referencia de Trustline v1.2.0: lleva one-to-ones estructurados, mantén un plan de carrera que tu equipo pueda ver y haz visible la salud del equipo como líder de ingeniería."
needs_tools: true
permalink: /es/tools/trustline/docs/
lang: es
alt_lang_url: /tools/trustline/docs/
---

<div class="docs-wrap">
  <header class="docs-header">
    <div class="docs-meta">
      <span class="badge">App v1.2.0</span>
      <span class="badge">Arquitectura de la capa LAN</span>
      <span>Publicado para <a href="https://engineeringprotocolstack.com">The Engineering Protocol Stack</a></span>
    </div>
    <h1>Guía de Usuario y Documentación de Trustline</h1>
    <div class="docs-subtitle">Liderar a tu equipo con estructura, confianza y crecimiento visible</div>
    <p>Trustline es la <strong>capa LAN</strong> de <em>The Engineering Protocol Stack</em> hecha software. Convierte los protocolos de equipo de la Parte II del libro (one-to-ones con una agenda fija, un plan de carrera basado en la confianza, roles de equipo explícitos y chequeos de salud recurrentes) en una aplicación de escritorio tranquila y local-first. Es la compañera de <a href="{{ '/tools/threadline/docs/' | relative_url }}">Threadline</a>, que gestiona la capa CPU: tú mismo.</p>
    <p><em>La aplicación está disponible solo en inglés, de modo que las capturas de pantalla y las etiquetas de la interfaz que aparecen en esta guía se mantienen en inglés. Los títulos de los capítulos del libro también se conservan en su idioma original.</em></p>
  </header>

  <div class="docs-layout">
    <!-- Sticky Navigation Sidebar -->
    <aside class="docs-sidebar">
      <div class="docs-nav-group">
        <div class="docs-nav-title">Fundamentos</div>
        <ul class="docs-nav-list">
          <li><a href="#the-lan-layer">El modelo de la capa LAN</a></li>
          <li><a href="#layer-check">Diagnóstico de la capa LAN</a></li>
          <li><a href="#getting-started">Primeros pasos</a></li>
        </ul>
      </div>

      <div class="docs-nav-group">
        <div class="docs-nav-title">One-to-ones</div>
        <ul class="docs-nav-list">
          <li><a href="#direct-reports">Personas a tu cargo</a></li>
          <li><a href="#sessions">Sesiones y tareas</a></li>
          <li><a href="#replies">Consultar respuestas</a></li>
          <li><a href="#exports">Exportaciones y correo</a></li>
        </ul>
      </div>

      <div class="docs-nav-group">
        <div class="docs-nav-title">Plan de carrera</div>
        <ul class="docs-nav-list">
          <li><a href="#career-path">El canvas del plan de carrera</a></li>
          <li><a href="#career-positions">Posiciones y niveles</a></li>
          <li><a href="#career-tracks">Itinerarios</a></li>
          <li><a href="#career-canvas-controls">Organizar el canvas</a></li>
        </ul>
      </div>

      <div class="docs-nav-group">
        <div class="docs-nav-title">Equipos y rituales</div>
        <ul class="docs-nav-list">
          <li><a href="#teams">Equipos</a></li>
          <li><a href="#team-roster">Plantilla</a></li>
          <li><a href="#team-agreements">Acuerdos de trabajo</a></li>
          <li><a href="#team-decisions">Decisiones</a></li>
          <li><a href="#team-health">Salud</a></li>
          <li><a href="#team-experiments">Experimentos</a></li>
          <li><a href="#team-scoreboard">Marcador</a></li>
          <li><a href="#team-interactions">Interacciones</a></li>
          <li><a href="#team-page">Exportar la página del equipo</a></li>
        </ul>
      </div>

      <div class="docs-nav-group">
        <div class="docs-nav-title">Referencia del sistema</div>
        <ul class="docs-nav-list">
          <li><a href="#preferences">Preferencias</a></li>
          <li><a href="#updates">Actualizaciones</a></li>
          <li><a href="#privacy">Privacidad y datos</a></li>
          <li><a href="#keyboard-shortcuts">Atajos de teclado</a></li>
        </ul>
      </div>
    </aside>

    <!-- Main Content Area -->
    <article class="docs-body">

      <!-- SECTION: THE LAN LAYER -->
      <section id="the-lan-layer" class="docs-section">
        <h2>🔗 La capa LAN: liderar a tu equipo</h2>
        <p><em>The Engineering Protocol Stack</em> organiza el liderazgo de ingeniería en tres capas con nombre de los sistemas a los que se parecen: <strong>CPU</strong> (gestionarte a ti mismo), <strong>LAN</strong> (liderar a tu equipo) y <strong>WAN</strong> (conectar hacia fuera). Cada capa tiene sus propios protocolos, y el libro es explícito sobre por qué no deben confundirse: un problema de comunicación en el equipo no se arregla con un truco de productividad personal, igual que un problema de enrutamiento nunca se resuelve reinstalando el sistema operativo.</p>

        <div class="protocol-box">
          <div class="protocol-box__title">📖 Referencia del libro: Part II — LAN (Chapters 6–10.1)</div>
          <p><em>"A team is not a group of people who work together. A team is a group of people who trust each other."</em> — Simon Sinek, citado al comienzo de la Parte II. El libro añade que un equipo que no tiene claras sus prioridades, acuerdos y principios "is just a group of people working together."</p>
        </div>

        <p>La capa LAN abarca a las personas más cercanas a ti: cómo se comunican, cómo crecen, cómo asumen roles y cómo construyen la confianza que convierte a un grupo de individuos en un equipo. La Parte II lo recorre en cinco movimientos, y Trustline da a cada uno un lugar donde vivir:</p>

        <table class="shortcuts-table">
          <thead>
            <tr>
              <th>Capítulo del libro</th>
              <th>El protocolo</th>
              <th>Dónde vive en Trustline</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Chapter 6 — Identifying Team Status</strong> (identificar el estado del equipo)</td>
              <td>Ver a cada persona a través de su rol, sus habilidades y su personalidad, y revisar esa imagen con una cadencia fija.</td>
              <td><a href="#team-roster">Plantilla del equipo</a>: roles cubiertos, roles sugeridos sin cubrir, puntos únicos de fallo.</td>
            </tr>
            <tr>
              <td><strong>Chapter 7 — Team Roles</strong> (roles de equipo)</td>
              <td>Los roles tratan de claridad, equilibrio y responsabilidad, no de estatus.</td>
              <td>El rol que cada persona desempeña en un equipo, separado de su cargo y de su posición en el plan de carrera.</td>
            </tr>
            <tr>
              <td><strong>Chapter 8 — Career Path</strong> (plan de carrera)</td>
              <td>Un camino visible de posiciones, niveles y confianza, con criterios de promoción explícitos.</td>
              <td><a href="#career-path">Canvas del plan de carrera</a>.</td>
            </tr>
            <tr>
              <td><strong>Chapters 9 and 9.1 — Onboarding and Communication</strong> (incorporación y comunicación)</td>
              <td>Un camino deliberado para quien se incorpora, y 1-on-1s que sirven a la persona y no al informe de estado.</td>
              <td><a href="#sessions">Sesiones one-to-one</a> y <a href="#team-agreements">acuerdos de trabajo</a>.</td>
            </tr>
            <tr>
              <td><strong>Chapter 10 — Team Management</strong> (gestión de equipos)</td>
              <td>Cinco disfunciones, Team Topologies, 1-on-1s y ciclos de feedback, y chequeos de salud del equipo.</td>
              <td>Sesiones, decisiones, <a href="#team-health">chequeos de salud</a>, <a href="#team-experiments">experimentos</a>, <a href="#team-scoreboard">marcador</a> e <a href="#team-interactions">interacciones</a>.</td>
            </tr>
          </tbody>
        </table>

        <h3>Cómo se relaciona Trustline con Threadline</h3>
        <p>Threadline protege tu atención; Trustline protege tus relaciones. Comparten lenguaje de diseño y modelo de privacidad, y las une un único puente deliberadamente pequeño: las tareas que te corresponden en los one-to-ones pueden entregarse a la Inbox de Threadline como archivos de texto plano (consulta <a href="#preferences-handoff">Threadline hand-off</a>). Las aplicaciones no comparten proceso, base de datos ni llamadas de red. Un compromiso que adquieres con una persona de tu equipo en Trustline se convierte en una tarea que procesas en Threadline, que es exactamente lo que el libro propone: el compromiso se adquiere en la capa LAN y se cumple en la capa CPU.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Shell-direct-reports-overview.png' | relative_url }}" alt="Trustline main window with the Direct reports section open and a scheduled one-to-one session for Mara Lindqvist displayed">
          <figcaption>La ventana de Trustline: una barra de iconos a la izquierda para elegir sección, una barra lateral con los registros de esa sección y un panel principal que se lee como una nota.</figcaption>
        </figure>
      </section>

      <!-- SECTION: LAN LAYER CHECK -->
      <section id="layer-check" class="docs-section">
        <h2>✅ El diagnóstico de la capa LAN</h2>
        <div class="protocol-box">
          <div class="protocol-box__title">📖 Referencia del libro: Chapter 10.1 — Layer check: LAN</div>
          <p><em>"Use this as a quick diagnostic, not as a scorecard. A team does not need to be perfect before it can improve, but it does need an honest picture of where it is."</em></p>
        </div>

        <p>El libro cierra la Parte II con ocho afirmaciones. Léelas pensando en tu equipo y responde con honestidad. La tabla que sigue asocia cada afirmación con las funciones de Trustline que la respaldan, y dice con claridad dónde la aplicación no ayuda, porque una herramienta que presume de resolver algo que no puede tocar es un trabajo más que mantener. (Las afirmaciones se reproducen tal como aparecen en el libro, en inglés.)</p>

        <ul class="check-list">
          <li>We have a shared understanding of the team's purpose, priorities, and current constraints.</li>
          <li>People know what they own, where they contribute, and where they depend on others.</li>
          <li>We can discuss problems, disagreement, and mistakes without turning them into personal attacks.</li>
          <li>New team members have a deliberate onboarding path, not just a collection of links and meetings.</li>
          <li>People can see how their skills, responsibilities, and scope can grow over time.</li>
          <li>Regular 1-on-1s and feedback conversations lead to clear follow-up actions.</li>
          <li>We make team health visible through recurring conversations or checks, not only when delivery is already failing.</li>
          <li>Our rituals, roles, and processes help the team collaborate instead of adding ceremony.</li>
        </ul>

        <table class="shortcuts-table">
          <thead>
            <tr>
              <th>Afirmación</th>
              <th>Lo que te da Trustline</th>
              <th>Lo que queda de tu parte</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Propósito, prioridades y restricciones compartidos</strong></td>
              <td>El <em>purpose</em> del equipo (se fija al <a href="#teams">añadir el equipo</a> y se edita en Team settings), sus <a href="#team-agreements">acuerdos de trabajo</a> y el <a href="#team-scoreboard">marcador</a> de números que todo el equipo puede recitar.</td>
              <td>Acordar con el equipo las propias prioridades. La aplicación las registra; no las decide.</td>
            </tr>
            <tr>
              <td><strong>Responsabilidades y dependencias</strong></td>
              <td>La <a href="#team-roster">plantilla</a> lista el rol de cada persona en el equipo, señala los roles sugeridos sin cubrir y los puntos únicos de fallo, y las <a href="#team-interactions">interacciones</a> registran cómo deben trabajar juntos dos equipos.</td>
              <td>Poner nombre a los roles con honestidad. La aplicación cuenta personas por rol; no puede decirte si el rol es real.</td>
            </tr>
            <tr>
              <td><strong>Discrepar sin ataques personales</strong></td>
              <td>Acuerdos de trabajo para las reglas de un debate respetuoso, un <a href="#team-decisions">registro de decisiones</a> para que un desacuerdo acabe en algo escrito, y el espacio <em>Feedback exchange</em> de cada sesión.</td>
              <td>La conversación. Trustline guarda el registro, nunca el valor.</td>
            </tr>
            <tr>
              <td><strong>Un camino de incorporación deliberado</strong></td>
              <td>Solo de forma indirecta: una <a href="#direct-reports">cadencia</a> semanal para quien se incorpora, el espacio <em>Career development</em> para las conversaciones de 30/60/90, los acuerdos de trabajo como el "cómo trabajamos" escrito, y el plan de carrera como respuesta a "qué aspecto tiene hacerlo bien aquí".</td>
              <td>El plan de incorporación en sí. Trustline no tiene módulo de onboarding; el plan 30/60/90 del Chapter 9 sigue siendo un documento que mantienes tú.</td>
            </tr>
            <tr>
              <td><strong>Crecimiento visible</strong></td>
              <td>El <a href="#career-path">canvas del plan de carrera</a>: posiciones, niveles, grados de confianza, criterios de promoción y las rutas entre posiciones, exportable para una reunión de calibración.</td>
              <td>La evaluación de niveles (autoevaluación, manager, pares) del Chapter 8. La aplicación guarda la escalera y el lugar de cada persona en ella, no las evidencias.</td>
            </tr>
            <tr>
              <td><strong>Los 1-on-1s conducen a seguimiento</strong></td>
              <td>Tareas con responsable, arrastradas hasta que se completan y mostradas al principio de la sesión siguiente. La <a href="#sessions">agenda fija de cinco bloques</a>. Entregar tus propias tareas a Threadline.</td>
              <td>Hacer el seguimiento, y la disciplina de mantener la sesión en su cadencia.</td>
            </tr>
            <tr>
              <td><strong>Salud hecha visible</strong></td>
              <td>El <a href="#team-health">chequeo de salud</a> con aviso de vencimiento, una línea de tendencia para cada uno de los diez temas y <a href="#team-experiments">experimentos</a> que responden a lo que el chequeo ha encontrado.</td>
              <td>Dirigir la sesión con el equipo. La aplicación registra puntuaciones; la conversación las produce.</td>
            </tr>
            <tr>
              <td><strong>Los rituales ayudan en lugar de añadir ceremonia</strong></td>
              <td>Todo ritual es opcional y local. Nada te insiste salvo una suave línea de "toca un chequeo". La <a href="#team-page">página del equipo</a> comparte la parte del equipo sin exponer a las personas.</td>
              <td>Retirar un ritual que ya no compensa.</td>
            </tr>
          </tbody>
        </table>

        <p>El consejo del libro, si varias respuestas son "todavía no", no es rediseñarlo todo de golpe: empieza por un acuerdo compartido. En términos de Trustline, suele ser el primer paso más pequeño: añade a las personas a tu cargo, programa el primer one-to-one y escribe una línea en los acuerdos de trabajo de un equipo.</p>
      </section>

      <!-- SECTION: GETTING STARTED -->
      <section id="getting-started" class="docs-section">
        <h2>🚀 Primeros pasos</h2>
        <p>Trustline es <strong>local-first y nativa en privacidad</strong>. No hay cuenta, ni registro, ni backend, ni telemetría. Tus notas sobre las personas son archivos corrientes en tu propio directorio de usuario. La materia son notas privadas sobre personas identificables, que es el argumento más sólido que existe contra guardarlas en el ordenador de otro.</p>

        <h3>Instalación</h3>
        <p>Descarga el instalador para tu plataforma desde la <a href="{{ '/es/tools/trustline/' | relative_url }}">página de Trustline</a>. Es gratuito y no requiere dirección de correo.</p>
        <ul>
          <li><strong>macOS:</strong> una compilación universal para Intel y Apple silicon. Está firmada y notarizada por Apple, por lo que se abre sin ninguna advertencia.</li>
          <li><strong>Windows:</strong> Windows 10 o posterior, de 64 bits. El instalador aún no está firmado con un certificado de desarrollador de pago, así que Windows indicará que no puede verificar el editor. Elige <strong>More info</strong> y después <strong>Run anyway</strong>.</li>
          <li><strong>Linux:</strong> un AppImage para Ubuntu 22.04 y equivalentes, o un paquete <code>.deb</code> para Debian 12+, Ubuntu 22.04+ y derivadas.</li>
        </ul>
        <p>La ventana se abre a 1100 por 720 píxeles y no puede hacerse más pequeña, de modo que la cabecera del equipo, la fila de pestañas y las tarjetas conservan su disposición completa.</p>

        <h3>Primer arranque</h3>
        <p>Trustline se abre sin secuencia de bienvenida y sin datos de ejemplo. El panel principal dice <em>"Select a direct report on the left, or add your first one, to start a 1-on-1."</em></p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Start-first-launch-empty.png' | relative_url }}" alt="Trustline on first launch with an empty Direct reports list and a prompt to add the first direct report">
          <figcaption>Primer arranque en una instalación limpia: una plantilla vacía y una sola instrucción.</figcaption>
        </figure>

        <p>Conviene conocer el orden en que unas cosas dependen de otras, porque la aplicación lo hace cumplir con avisos y no con errores:</p>
        <ol>
          <li><strong>Define primero tu plan de carrera.</strong> Cada persona a tu cargo está vinculada a una posición de la escalera, así que el formulario <em>Add report</em> te dice <em>"Define a position on the career path first — every report needs one to link to"</em> hasta que exista al menos una posición. Es la lógica del Chapter 8 llevada a la letra: la confianza se lee de la posición, nunca se escribe sobre una persona.</li>
          <li><strong>Añade a las personas a tu cargo.</strong> Una entrada por cada persona que depende de ti.</li>
          <li><strong>Programa el primer one-to-one</strong> desde la página de una persona.</li>
          <li><strong>Agrupa a las personas en equipos</strong> cuando quieras los rituales a nivel de equipo. Un equipo se construye con las personas a tu cargo, así que el formulario <em>Add team</em> espera a que haya al menos una.</li>
        </ol>

        <h3>La ventana de un vistazo</h3>
        <p>La <strong>barra de actividad</strong> estrecha de la izquierda elige la sección de datos con la que trabajas. Sus tres secciones son <strong>Direct reports</strong> (personas a tu cargo), <strong>Career path</strong> (plan de carrera) y <strong>Teams</strong> (equipos); más abajo hay dos botones. <strong>Help</strong> (un icono de interrogación) está sobre el separador del pie y abre esta guía de usuario en tu navegador, y <strong>Preferences</strong> (el engranaje) está en el pie, a la altura del pie de la propia barra lateral. La <strong>barra lateral</strong> lista los registros de esa sección y contiene sus formularios "Add". El <strong>panel principal</strong> muestra el registro que hayas seleccionado.</p>

        <h3>Dónde viven tus datos</h3>
        <p>Todo se guarda en la carpeta estándar de datos de aplicación de tu sistema operativo, en una carpeta llamada <code>trustline</code>:</p>
        <ul>
          <li><strong>macOS:</strong> <code>~/Library/Application Support/trustline</code></li>
          <li><strong>Windows:</strong> <code>%APPDATA%\trustline</code></li>
          <li><strong>Linux:</strong> <code>~/.local/share/trustline</code></li>
        </ul>
        <p>Puedes elegir otra ubicación en <a href="#preferences-data">Preferences → Data</a>. Los archivos se pueden leer sin la aplicación: cada one-to-one es un archivo Markdown y el resto es JSON plano. <a href="#privacy">Privacidad y datos</a> los enumera.</p>

        <h3>Claro, oscuro o la elección del sistema</h3>
        <p>Trustline sigue la elección de tres opciones de Obsidian: <strong>Adapt to system</strong>, <strong>Light</strong> o <strong>Dark</strong>. Cámbiala en <a href="#preferences-appearance">Preferences → Appearance</a>; se aplica al instante y, con "Adapt to system", sigue al sistema operativo en directo.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Start-dark-theme.png' | relative_url }}" alt="Trustline in dark theme with the Direct reports section open and a one-to-one displayed">
          <figcaption>La misma ventana en el tema oscuro. Cada color de la aplicación es un token de tema, así que nada está fijado a un solo modo.</figcaption>
        </figure>
      </section>

      <!-- SECTION: DIRECT REPORTS -->
      <section id="direct-reports" class="docs-section">
        <h2>👥 Personas a tu cargo (Direct Reports)</h2>
        <div class="protocol-box">
          <div class="protocol-box__title">📖 Referencia del libro: Chapter 6 — Identifying Team Status, y Chapter 8 — Career Path</div>
          <p><em>"The question to ask isn't 'what's their role?' It's 'what would break if they were out for a month, and who else could catch it?'"</em> (Chapter 6). Y del Chapter 8, la pregunta que decide un nivel: Junior, <em>"Can I trust them to deliver a clear task correctly?"</em> Mid, <em>"Can I trust them with a problem, not just a task?"</em> Senior, <em>"Can I trust them to guide others and improve the system over time?"</em></p>
        </div>

        <p>La sección <strong>Direct reports</strong> lista a las personas que dependen de ti. Cada fila muestra un avatar con iniciales, el nombre y una segunda línea con el rol de la persona y la cadencia de sus one-to-ones, por ejemplo <em>Payments Engineer · biweekly</em>. El color del avatar lo fija la persona, de modo que cada una tiene siempre el mismo color.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Reports-roster-and-header.png' | relative_url }}" alt="Direct reports sidebar listing five people, with Mara Lindqvist selected and her header showing role, trust tier, cadence and email">
          <figcaption>La plantilla y la cabecera de una persona seleccionada. El grado de confianza se lee de la posición del plan de carrera, nunca se escribe sobre la persona.</figcaption>
        </figure>

        <h3>Añadir a una persona</h3>
        <p>Abre <strong>Add report</strong> al pie de la barra lateral. El formulario pide:</p>
        <ul>
          <li><strong>Name:</strong> obligatorio.</li>
          <li><strong>Position on your career path:</strong> obligatorio. Un desplegable con las posiciones que has definido, cada una con su grado de confianza, como <em>Senior Software Engineer — Mid</em>. Aquí es donde la persona queda situada en la escalera.</li>
          <li><strong>Role:</strong> obligatorio, texto libre. Al elegir una posición se rellena con el título de la posición, y puedes sobrescribirlo. El Chapter 6 traza la distinción para la que existe este campo: <em>"Titles drift."</em> La posición es el peldaño formal; el rol es lo que la persona hace realmente, como <em>Payments Engineer</em> o <em>Platform Engineer</em>.</li>
          <li><strong>Email (optional):</strong> sirve para enviar a la persona la agenda antes de un one-to-one y para reconocer su respuesta. Sin él, la ficha funciona con normalidad, pero <em>Send agenda</em> se sustituye por un aviso para añadir una dirección.</li>
          <li><strong>Level (optional):</strong> disponible solo cuando la posición elegida tiene niveles. Las opciones se leen <em>Level N</em>, seguido de la descripción del nivel, más <em>no specific level</em>.</li>
          <li><strong>Cadence:</strong> <em>Weekly</em> (por defecto), <em>Biweekly</em> o <em>Monthly</em>. Decide cuándo se propone la siguiente sesión (consulta <a href="#sessions">Sesiones</a>).</li>
        </ul>
        <p>La guía del libro sobre el ritmo es clara: <em>"Weekly or bi-weekly is ideal—consistency builds psychological safety and prevents the meeting from becoming a status update."</em> La cadencia mensual está disponible, pero trátala como la excepción y asegúrate de que el ritmo que elijas sea uno que vayas a mantener. Un one-to-one cancelado, advierte el libro, señala que tu equipo no es la prioridad.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Reports-add-report-form.png' | relative_url }}" alt="Add report form open in the sidebar with the position picker expanded showing the four career path positions">
          <figcaption>El formulario Add report con el selector de posición abierto. Add y Cancel están al pie; Escape también cancela y vacía los campos.</figcaption>
        </figure>

        <h3>La página de la persona</h3>
        <p>Al seleccionar a una persona se abre su página. La cabecera muestra el nombre, después una línea como <em>Payments Engineer (Level N) · Mid trust · biweekly cadence</em> (el nivel aparece cuando está definido) y la dirección de correo, si consta. A su lado hay tres botones: <strong>Edit</strong>, <strong>Export this report's data</strong> y <strong>Delete report</strong>. Debajo de la cabecera están el selector de sesión y la sesión actual, que se tratan en la sección siguiente.</p>

        <h3>Editar a una persona</h3>
        <p><strong>Edit</strong> sustituye la página por un formulario titulado <em>Edit &lt;name&gt;</em> con los mismos seis campos. Aquí se registra una promoción: cambia la <strong>Position</strong> (y el <strong>Level</strong>) y el grado de confianza que muestra la página cambia con ellos, porque siempre se lee a través de la posición. El formulario termina con <strong>Save</strong>, <strong>Cancel</strong> y <strong>Delete report</strong>.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Reports-edit-report-form.png' | relative_url }}" alt="Edit Mara Lindqvist form showing name, position, role, email, level and cadence fields with Save, Cancel and Delete report buttons">
          <figcaption>Edición de una persona. Cambiar la posición es la forma en que una promoción entra en el registro.</figcaption>
        </figure>

        <h3>Eliminar a una persona y recuperarla</h3>
        <p>Eliminar nunca destruye nada de inmediato. La confirmación ofrece tres opciones:</p>
        <ul>
          <li><strong>Cancel:</strong> no ocurre nada. El diálogo también se cierra con Escape o haciendo clic fuera de él.</li>
          <li><strong>Export first:</strong> abre el selector de carpeta y guarda una copia en Markdown plano del registro de la persona y de todas sus sesiones (la misma exportación que <a href="#exports-report">Export this report's data</a>), y después elimina. Si cancelas el selector o la exportación falla, no se elimina nada y Trustline te lo indica.</li>
          <li><strong>Delete:</strong> mueve a la persona a la papelera (Trash).</li>
        </ul>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Reports-delete-dialog.png' | relative_url }}" alt="Delete Owen Castellanos confirmation dialog offering Cancel, Export first and Delete">
          <figcaption>La confirmación de eliminación. Como la acción es destructiva, el foco empieza en Cancel para que un Enter accidental no elimine nada.</figcaption>
        </figure>

        <p>Una persona eliminada sale de la plantilla y se retira de todos los equipos en los que estaba. Aparece entonces un aviso que dice <em>"&lt;name&gt; moved to Trash."</em> con un botón <strong>Undo</strong> que permanece quince segundos. Pasado ese tiempo, la persona espera en <a href="#preferences-trash">Preferences → Data → Trash</a> durante 30 días, junto con sus sesiones y pertenencias a equipos, y puede restaurarse desde allí. Al restaurar se recuperan las tres cosas.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Reports-undo-toast.png' | relative_url }}" alt="Toast reading Noor Haddadi moved to Trash with an Undo button in the corner of the window">
          <figcaption>El aviso Undo tras eliminar: quince segundos para cambiar de opinión sin abrir Preferences.</figcaption>
        </figure>
      </section>

      <!-- SECTION: SESSIONS -->
      <section id="sessions" class="docs-section">
        <h2>🗓️ Sesiones one-to-one y tareas (Action Items)</h2>
        <div class="protocol-box">
          <div class="protocol-box__title">📖 Referencia del libro: Chapter 10 — 1-on-1s &amp; Feedback Loops</div>
          <p><em>"Structure beats spontaneity."</em> El capítulo pide una plantilla que lleve el seguimiento de las reuniones anteriores y que enumere de qué quieren hablar ambas personas. Y: <em>"Document action items at the end of every session and review them next time—accountability flows both ways."</em></p>
        </div>

        <p>Cada persona tiene un historial de sesiones, una por one-to-one. Una sesión es un archivo Markdown formado por una agenda fija y una lista de tareas, de modo que el registro sigue siendo legible mucho después de que dejes de usar cualquier herramienta concreta.</p>

        <h3>Programar una sesión</h3>
        <p>Una persona sin sesiones muestra <em>"No 1-on-1s recorded yet with &lt;name&gt;."</em> y un botón <strong>Schedule next 1-on-1</strong>. La primera sesión lleva la fecha de hoy. Cuando la sesión más reciente está completada, la página lo indica, por ejemplo <em>"The last 1-on-1 with Priya Raghunathan (2026-09-08) is complete."</em>, y ofrece el mismo botón.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Sessions-schedule-next-nudge.png' | relative_url }}" alt="Priya Raghunathan's page showing that the last one-to-one is complete, with a Schedule next 1-on-1 button">
          <figcaption>El aviso tras una sesión completada. No se programa nada hasta que pulsas el botón.</figcaption>
        </figure>

        <p>La siguiente sesión se fecha en <em>la más tardía</em> de estas dos: hoy, o la última sesión más la cadencia de la persona (7 días si es semanal, 14 si es quincenal, 30 si es mensual). Nunca es anterior al ritmo normal de la persona, y no se retrasa más solo porque tú vayas con retraso. Todas las tareas <em>abiertas</em> de la sesión anterior pasan a la nueva; las terminadas, no.</p>

        <h3>La página de la sesión</h3>
        <p>Cuando una persona tiene más de una sesión, un selector sobre la sesión las lista todas, de la más reciente a la más antigua, como <em>fecha · estado</em>, por ejemplo <em>2026-09-29 · scheduled</em>. Una sesión está <strong>scheduled</strong> (programada) o <strong>completed</strong> (completada). Elige otra para consultar el historial.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Sessions-session-picker.png' | relative_url }}" alt="Session picker open on Mara Lindqvist's page listing a scheduled session on 2026-09-29 and a completed session on 2026-09-15">
          <figcaption>El selector de sesión: todo el historial de una relación, de la más reciente a la más antigua.</figcaption>
        </figure>

        <p>Una sesión abierta tiene tres bloques y una fila de botones.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Sessions-active-session-agenda.png' | relative_url }}" alt="Mara Lindqvist's scheduled session for 2026-09-29 showing the Send agenda button, the action items and the five agenda categories with prepared notes">
          <figcaption>Una sesión programada con su agenda preparada antes de la reunión, que es el estado realista y la razón de que exista <em>Send agenda</em>.</figcaption>
        </figure>

        <h3>La agenda de cinco bloques</h3>
        <p>La agenda siempre tiene las mismas cinco categorías, en el mismo orden, porque la estructura es lo que evita que un one-to-one derive hacia una reunión de estado. Son el marco propio del libro:</p>

        <table class="shortcuts-table">
          <thead>
            <tr>
              <th>Categoría de la agenda</th>
              <th>Para qué sirve, según el libro</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Personal check-in</strong></td>
              <td>Construir confianza con una conversación genuina más allá del trabajo. <em>¿Cómo está realmente?</em> (El libro sugiere de 5 a 10 minutos.)</td>
            </tr>
            <tr>
              <td><strong>Progress &amp; blockers</strong></td>
              <td>Repasar el trabajo actual, pero centrándose en eliminar obstáculos, no en microgestionar detalles. (Unos 10 minutos.)</td>
            </tr>
            <tr>
              <td><strong>Feedback exchange</strong></td>
              <td>Una vía de doble sentido: dar feedback específico e invitar al suyo sobre tu liderazgo. Combínalo con el modelo SBI (Situation, Behavior, Impact) del mismo capítulo. (Unos 10 minutos.)</td>
            </tr>
            <tr>
              <td><strong>Career development</strong></td>
              <td>Objetivos a largo plazo, carencias de habilidades y oportunidades de aprendizaje. <em>"This separates great managers from task managers."</em> (5–10 minutos.)</td>
            </tr>
            <tr>
              <td><strong>Open topics</strong></td>
              <td>Su espacio para plantear cualquier cosa. Escucha el 80 % del tiempo. (5–10 minutos.)</td>
            </tr>
          </tbody>
        </table>

        <p>Cada categoría muestra las notas ya registradas en ella y después un campo vacío que dice <em>"Add a note for this session…"</em>. Una nota escrita ahí se guarda en esa categoría. Una nota que procede de la respuesta por correo de la propia persona se marca como <em>(from their reply)</em> y se separa con un filete de cita, porque es una cita, no tu taquigrafía. El libro es igual de claro sobre en qué no debe convertirse un one-to-one: una reunión de estado del proyecto, un hueco que se cancela cuando hay mucho trabajo, o una conversación en la que tú hablas más del 20 % del tiempo.</p>

        <h3>Guardar y cerrar</h3>
        <ul>
          <li><strong>Save notes</strong> escribe las notas de agenda que has tecleado, las tareas nuevas y las casillas que hayas marcado, y deja la sesión abierta.</li>
          <li><strong>Save &amp; close session</strong> hace lo mismo y marca la sesión como <em>completed</em>. No se puede cerrar una sesión sin nada escrito en la agenda: una sesión sin notas nunca se llevó a cabo, se saltó.</li>
          <li><strong>Export</strong> abre el menú descrito en <a href="#exports">Exportaciones y correo</a>.</li>
        </ul>

        <h3>Tareas (Action items)</h3>
        <p>El bloque <strong>Action items</strong> lista cada compromiso, cada uno con una casilla, su descripción y una etiqueta de responsable: <em>you</em> o <em>them</em>. El libro es explícito en que los compromisos no son solo de la otra persona, y el campo de responsable es la forma en que Trustline lo respeta.</p>
        <p>Para añadir una, escribe en el campo <em>New action item…</em>, elige <em>Owner: them</em> (por defecto) u <em>Owner: you</em>, y pulsa el botón <strong>+</strong> o <kbd>Cmd/Ctrl</kbd> + <kbd>Enter</kbd>. El campo crece para alojar varias líneas y se conservan los saltos de línea. Una tarea nueva aparece en la lista marcada como <em>(new)</em> y se guarda al pulsar <strong>Save notes</strong> o <strong>Save &amp; close session</strong>.</p>
        <p>Marca una casilla para dar una tarea por hecha y guarda. Una tarea terminada y guardada queda bloqueada y no pasa a la sesión siguiente. Una tarea que sigue abierta vuelve a aparecer al principio de la siguiente, que es como los compromisos de la última vez se muestran esta vez.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Sessions-action-items.png' | relative_url }}" alt="Action items block with two existing items, one new item marked as new, and the new action item field with the owner drop-down set to Owner: you">
          <figcaption>Añadir una tarea. El responsable se elige por tarea, y las tareas abiertas acompañan a la relación de una sesión a otra.</figcaption>
        </figure>

        <h3>Consultar una sesión completada</h3>
        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Sessions-completed-session.png' | relative_url }}" alt="Mara Lindqvist's completed session from 2026-09-15 with agenda notes under four categories and one finished action item">
          <figcaption>Una sesión completada desde el selector: lo que se dijo, lo que se acordó y lo que está terminado.</figcaption>
        </figure>
      </section>

      <!-- SECTION: REPLIES -->
      <section id="replies" class="docs-section">
        <h2>📬 Enviar la agenda y consultar respuestas</h2>
        <div class="protocol-box">
          <div class="protocol-box__title">📖 Referencia del libro: Chapter 10 — Agenda Framework, y Chapter 9.1 — Communication</div>
          <p><em>"Create a shared agenda where both of you contribute topics before the meeting."</em> El Chapter 10 pide una plantilla que lleve el seguimiento de las reuniones anteriores y que enumere de qué quieren hablar ambas personas. El Chapter 9.1 añade que un one-to-one es el lugar para hablar de <em>la persona</em>, lo cual solo es posible si ha tenido antes la oportunidad de decirlo.</p>
        </div>

        <p>El relé de correo permite compartir la agenda antes de la reunión y hace que las propuestas de la persona vuelvan a la sesión. Es opcional, funciona a través de las cuentas de correo que configuras tú y está desactivado hasta que lo configuras en <a href="#preferences-email">Preferences → Email relay</a>.</p>

        <h3>Send agenda</h3>
        <p>En la parte superior de una sesión abierta, <strong>Send agenda</strong> envía por correo a la persona la agenda actual. El correo se titula <em>"Agenda for our 1-on-1 on September 29"</em> (con la fecha de esa sesión), saluda a la persona por su nombre y lista las cinco categorías con lo que ya hayas escrito en cada una, o <em>"(nothing noted yet)"</em>. Termina invitando a responder, pidiendo este formato para poder leerlo limpiamente:</p>
        <pre><code># Answer

Your message here.

- New topic 1
- New topic 2</code></pre>
        <p>Una vez enviado, el botón pasa a decir <strong>Resend agenda</strong> y una línea a su lado indica <em>Sent to &lt;address&gt;</em>. Si la persona no tiene dirección de correo registrada, el bloque muestra en su lugar <em>"Add an email address to this report to send them the agenda."</em> El correo de la agenda nunca lleva la firma de Trustline: la respuesta tiene que mantenerse en un formato que la aplicación pueda volver a leer.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Replies-send-agenda-block.png' | relative_url }}" alt="Top of Mara Lindqvist's session showing the Send agenda button above the action items">
          <figcaption>El bloque Send agenda. Solo está disponible para personas con dirección de correo registrada.</figcaption>
        </figure>

        <h3>Check for replies</h3>
        <p>El botón de flechas circulares de la cabecera de Direct reports, <strong>Check for replies</strong>, busca en tu buzón respuestas a las agendas que has enviado. Necesita los ajustes IMAP opcionales (consulta <a href="#preferences-email">Email relay</a>). Mientras se ejecuta, un aviso dice <em>"Checking for replies…"</em>; después se convierte en uno de estos:</p>
        <ul>
          <li><em>"No new replies."</em></li>
          <li><em>"Added N proposed topics."</em> (o <em>topic</em> si es uno)</li>
          <li>Un fallo explicado en lenguaje llano con un botón <strong>Try again</strong>, por ejemplo tras una conexión interrumpida.</li>
        </ul>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Replies-check-for-replies-button.png' | relative_url }}" alt="Direct reports sidebar header with the Check for replies button highlighted and its tooltip visible">
          <figcaption>El botón Check for replies, en la cabecera de la barra lateral.</figcaption>
        </figure>

        <p>Una respuesta se acepta solo si supera dos comprobaciones. Primero, debe pertenecer al hilo de una agenda enviada por esta aplicación. Segundo, su remitente debe ser la dirección registrada para esa persona. Un mensaje que falla cualquiera de las dos pruebas se omite en silencio, no se archiva bajo el nombre de la persona, porque una nota en este registro se lee como palabras de esa persona y una falsificada lo corrompería de forma permanente. Un tema perdido es una molestia que se arregla pidiéndolo de nuevo.</p>
        <p>Una respuesta aceptada se interpreta así. Si contiene una línea que dice <code># Answer</code>, solo se usa lo que va después de esa línea. Los párrafos formados íntegramente por elementos de lista (<code>-</code>, <code>*</code> o <code>•</code>) se convierten en un tema por elemento; cualquier otro párrafo se convierte en un único tema; y las típicas líneas de firma de "enviado desde mi teléfono" se descartan. Cada tema se archiva en <strong>Open topics</strong> y se marca como <em>(from their reply)</em>.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Replies-reply-notes-in-agenda.png' | relative_url }}" alt="Agenda block in which notes contributed by the report are marked from their reply and set apart with a quoted rail">
          <figcaption>Temas que proceden de la propia respuesta de la persona, mantenidos visiblemente aparte de las notas del manager.</figcaption>
        </figure>
      </section>

      <!-- SECTION: EXPORTS -->
      <section id="exports" class="docs-section">
        <h2>📤 Exportaciones y correo</h2>
        <p>Trustline exporta a cuatro escalas: una sesión, una persona, el plan de carrera y un equipo. (La exportación completa de datos y la copia de seguridad están en <a href="#preferences-backup">Preferences</a>.) No se sube nada a ningún sitio; cada exportación es un archivo o una carpeta que eliges tú.</p>

        <h3 id="exports-session">Exportar una sesión</h3>
        <p>El menú <strong>Export</strong>, junto a <em>Save notes</em> al pie de una sesión abierta, convierte la sesión que estás viendo en un archivo. Tiene cuatro acciones:</p>
        <ul>
          <li><strong>Save as Markdown</strong> y <strong>Save as PDF</strong> abren el diálogo de guardado del sistema, y junto al botón aparece un breve <em>Saved.</em></li>
          <li><strong>Email as Markdown</strong> y <strong>Email as PDF</strong> preguntan <em>"Send to this email address:"</em>, rellenado con la dirección de la persona (puedes introducir otra), y envían el archivo como adjunto a través del relé configurado; después confirman con <em>Sent to &lt;address&gt;.</em></li>
        </ul>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Exports-session-export-menu.png' | relative_url }}" alt="Export menu open on a session showing Save as Markdown, Save as PDF, Email as Markdown and Email as PDF">
          <figcaption>El menú Export de la sesión: el mismo resultado tanto si lo guardas como si lo envías.</figcaption>
        </figure>

        <p>Los PDF se componen con la tipografía Inter incrustada, de modo que los nombres con caracteres latinos extendidos, griegos y cirílicos se conservan. Un carácter que la fuente no puede dibujar, como un emoji, aparece como un rombo (◇) en lugar de desaparecer, y Trustline te avisa cuando ocurre. Las tareas abiertas llevan una casilla vacía y las terminadas una casilla marcada. El aspecto del PDF sigue a <a href="#preferences-appearance">Preferences → Appearance → PDF export theme</a>. Una exportación enviada por correo puede llevar la marca de Trustline y una línea de crédito, o ir como texto plano, según el ajuste <em>Signature</em> de Email relay.</p>

        <h3 id="exports-report">Exportar los datos de una persona</h3>
        <p><strong>Export this report's data</strong>, en la cabecera de la persona, te entrega todo lo que Trustline guarda sobre ella, por ejemplo para atender una solicitud de acceso a datos. Elige una carpeta; Trustline crea una subcarpeta con el nombre de la dirección de correo de la persona (o su identificador si no la tiene) que contiene <code>report.md</code>, con su nombre, rol, posición, nivel, grado de confianza, correo, cadencia y los equipos en los que está, con su rol en cada uno, además de un archivo Markdown por sesión. Un aviso confirma <em>"Exported &lt;name&gt;'s record and N sessions to &lt;folder&gt;."</em> Exportar de nuevo sobrescribe los mismos nombres de archivo. Los registros de equipo no están vinculados a una persona y quedan fuera de esta exportación.</p>

        <h3>Exportar el plan de carrera y la página de un equipo</h3>
        <p>El plan de carrera se exporta como Markdown o PDF desde su propio menú <strong>Export</strong> (consulta <a href="#career-export">Plan de carrera</a>), y la parte compartible de un equipo se exporta como un único archivo Markdown (consulta <a href="#team-page">Exportar la página del equipo</a>).</p>
      </section>

      <!-- SECTION: CAREER PATH -->
      <section id="career-path" class="docs-section">
        <h2>🧭 El canvas del plan de carrera (Career Path)</h2>
        <div class="protocol-box">
          <div class="protocol-box__title">📖 Referencia del libro: Chapter 8 — Career Path</div>
          <p><em>"A career path is the roadmap that helps anyone in a company understand how they can grow over time in skills, responsibilities, and salary."</em> Uno bueno hace explícitos el rol actual, los siguientes roles posibles, las habilidades necesarias para cada paso y los hitos de crecimiento, y abarca tanto el crecimiento vertical como los movimientos laterales. Sin él, <em>"people assume they must leave the company to progress."</em></p>
        </div>

        <p>La sección <strong>Career path</strong> es donde defines la escalera sobre la que crece tu equipo. Dos ideas del Chapter 8 le dan forma. Primera: un plan de carrera es un <strong>grafo, no una línea</strong>: un ingeniero sénior puede convertirse en staff engineer <em>o</em> pasar a la gestión de ingeniería, ambos caminos legítimos, desde la misma posición. Segunda: <strong>la confianza pertenece a la posición, no a la persona</strong>: cada posición declara un grado de confianza, y el grado de una persona se lee siempre a través de la posición que ocupa. Así, las dos cosas nunca pueden discrepar en silencio sobre cuánta confianza se ha ganado alguien.</p>

        <p>Sin ninguna posición seleccionada, el panel principal muestra toda la escalera como un diagrama: un encabezado <em>Career path</em>, la indicación <em>"Click a position to edit it, or drag one to arrange the ladder."</em>, un botón <strong>Reset layout</strong> y el canvas. Cada posición es una caja con su título y su grado de confianza, coloreada según el grado. Las flechas van de una posición a cada posición a la que puede promocionar, y un contorno detrás de un grupo de cajas es un itinerario (track) con nombre.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Career-canvas-overview.png' | relative_url }}" alt="Career path canvas showing an Individual contributor track with Software Engineer, Senior Software Engineer and Staff Engineer, and a Leadership track with Engineering Manager, joined by promotion arrows">
          <figcaption>El canvas: la escalera ramificada del propio libro, con un itinerario de contribuidor individual, un itinerario de liderazgo y las rutas entre posiciones dibujadas como flechas.</figcaption>
        </figure>

        <p>La barra lateral lista las mismas posiciones como filas (título y grado de confianza), con los desplegables <strong>Add position</strong> y <strong>Tracks</strong> debajo, y un menú <strong>Export</strong> en su cabecera en cuanto existe al menos una posición.</p>

        <h3 id="career-positions">Posiciones y niveles</h3>
        <p>Abre <strong>Add position</strong> para definir un peldaño:</p>
        <ul>
          <li><strong>Title:</strong> obligatorio, por ejemplo <em>Senior Software Engineer L2</em>.</li>
          <li><strong>Trust tier:</strong> <em>Junior — trust with a clear task</em>, <em>Mid — trust with a problem</em> (por defecto) o <em>Senior — trust to guide others</em>. Se destilan de las tres pruebas de confianza del Chapter 8: una tarea clara, un problema y guiar a otros.</li>
          <li><strong>Core theme (optional):</strong> una frase corta, como <em>Owning execution</em>.</li>
          <li><strong>Promotion criteria (optional):</strong> lo que quieres ver antes de promocionar desde esta posición. El Chapter 8 pide comportamientos observables, no intuición, y dice también que alguien debería operar en el nivel siguiente durante dos o tres meses antes de la promoción. Este campo es donde lo dejas por escrito.</li>
        </ul>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Career-add-position-form.png' | relative_url }}" alt="Add position form open in the Career path sidebar with title, trust tier, core theme and promotion criteria fields">
          <figcaption>Definir una posición. El grado de confianza es la prueba de confianza del libro; los criterios son tuyos.</figcaption>
        </figure>

        <p>Al seleccionar una posición, desde la barra lateral o haciendo clic en su caja, se abre su editor con un enlace <strong>← View full schema</strong> de vuelta al canvas. La cabecera dice, por ejemplo, <em>Mid trust · rung 2 of 4</em>. El formulario contiene:</p>
        <ul>
          <li><strong>Title</strong> y <strong>Trust tier</strong>, como arriba.</li>
          <li><strong>Track:</strong> en qué itinerario con nombre está la posición, o <em>— no track —</em>. Se guarda en cuanto lo cambias.</li>
          <li><strong>Core theme</strong> y <strong>Promotion criteria — what you want to see before promoting out</strong>.</li>
          <li><strong>Can promote to:</strong> una lista de casillas con todas las demás posiciones. Marca más de una para un punto de bifurcación: en la escalera de demostración, Senior Software Engineer puede promocionar tanto a Staff Engineer como a Engineering Manager. Las casillas marcadas se convierten en las flechas del canvas.</li>
          <li><strong>Save</strong> guarda el formulario.</li>
        </ul>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Career-position-editor.png' | relative_url }}" alt="Senior Software Engineer position editor with trust tier Mid, track Individual contributor, and Can promote to ticked for Staff Engineer and Engineering Manager">
          <figcaption>Una posición con dos rutas de promoción: la bifurcación Staff o gestión del libro.</figcaption>
        </figure>

        <p>Debajo del formulario hay una sección <strong>Levels</strong>. El propio ejemplo del Chapter 8 es que "Software Developer" no es un peldaño plano, sino tres niveles numerados, cada uno con su descripción y su justificación de promoción. Cada nivel existente es un pequeño formulario con un campo <strong>Description</strong>, un campo <strong>Promotion criteria — signals, anti-patterns, how to evaluate</strong> y su propio botón <strong>Save level N</strong>. El último formulario, <strong>Add level N</strong>, añade el nivel siguiente (botón <strong>Add level</strong>). Cuando una posición tiene niveles, puedes elegir uno para una persona, y aparece en su cabecera.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Career-levels.png' | relative_url }}" alt="Levels section of the Senior Software Engineer position with two saved levels and a form to add the next one">
          <figcaption>Niveles dentro de una posición, cada uno con su propia descripción y criterios de promoción.</figcaption>
        </figure>

        <h3 id="career-tracks">Itinerarios (Tracks)</h3>
        <p>Un <strong>track</strong> es una rama con nombre de la escalera, como <em>Individual contributor</em> (<em>Depth of craft, widening scope of influence</em>) o <em>Leadership</em> (<em>Scope shifts from the work to the people doing it</em>). Se dibuja como un contorno detrás de sus posiciones en el canvas, y es la forma de representar el diagrama de dos ramas del Chapter 8.</p>
        <p>Abre el desplegable <strong>Tracks</strong> de la barra lateral. Lista tus itinerarios, cada uno con su número de posiciones (<em>3 positions</em>) y botones de flecha <strong>Move up</strong> y <strong>Move down</strong> que fijan su orden. Al final, un formulario añade uno: <strong>Track name</strong> (obligatorio) y <strong>What this track is for (optional)</strong>, y después <strong>Add track</strong>.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Career-tracks-sidebar.png' | relative_url }}" alt="Tracks disclosure open in the Career path sidebar listing Individual contributor and Leadership with reorder arrows and the add track form below">
          <figcaption>El desplegable Tracks: listar, reordenar y añadir.</figcaption>
        </figure>

        <p>Al seleccionar un itinerario se abre su editor: su <strong>Track name</strong> y <strong>What this track is for</strong> con un botón <strong>Save</strong>; una lista de casillas <strong>Positions on this track</strong> con <strong>Save positions</strong> (una posición pertenece a un único itinerario, así que marcar una que está en otro la mueve, y la lista indica <em>— on &lt;track&gt;</em> a su lado); y un botón rojo <strong>Delete track</strong>. Al eliminar se pregunta <em>"Delete this track? The positions on it stay on the ladder — they just stop being grouped."</em></p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Career-track-editor.png' | relative_url }}" alt="Track editor for Individual contributor showing name, purpose, a checklist of positions on the track and a Delete track button">
          <figcaption>El editor de un itinerario. Los itinerarios son presentación: eliminar uno nunca elimina una posición.</figcaption>
        </figure>

        <h3 id="career-canvas-controls">Organizar el canvas</h3>
        <p>El canvas dispone la escalera automáticamente, y puedes reorganizarla. La disposición se guarda, y todo el diagrama se reajusta cuando cambia el tamaño de la ventana. En un panel estrecho las cajas se reducen y pierden el subtítulo del grado de confianza; el grado se sigue transmitiendo por el color y por la etiqueta que lee un lector de pantalla.</p>
        <ul>
          <li><strong>Arrastra una posición</strong> para moverla. Se ajusta a una cuadrícula de 8 unidades. Mantén pulsado <kbd>Alt</kbd> mientras arrastras para colocarla libremente entre los puntos de la cuadrícula. Un arrastre solo comienza cuando el puntero se mueve unos píxeles, de modo que un clic algo tembloroso sigue abriendo la posición.</li>
          <li><strong>Arrastra la etiqueta de un itinerario</strong> para mover el itinerario entero y todas sus posiciones a la vez.</li>
          <li><strong>Pulsa <kbd>Esc</kbd> durante un arrastre</strong> para cancelar y devolver la caja o el itinerario a su punto de partida.</li>
          <li><strong>Reset layout</strong> devuelve todas las posiciones a la disposición automática, tras confirmar <em>"Reset all positions to the automatic layout? Your manual arrangement will be lost."</em> Esto no se puede deshacer.</li>
        </ul>
        <p>El canvas es totalmente operable con el teclado: cada caja y cada etiqueta de itinerario es una parada de tabulación. <kbd>Enter</kbd> o <kbd>Space</kbd> la abre, <kbd>←</kbd> <kbd>↑</kbd> <kbd>→</kbd> <kbd>↓</kbd> la mueven un paso de cuadrícula, y <kbd>Shift</kbd> con una flecha la mueve cuatro pasos. Una ráfaga de pulsaciones se guarda una sola vez, una fracción de segundo después de la última.</p>
        <p>La caja con el foco queda rodeada por su propio anillo, dibujado en el color de acento justo fuera de su borde, de modo que siempre puedes ver qué posición abrirá <kbd>Enter</kbd>.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Career-canvas-focused-position.png' | relative_url }}" alt="Career path canvas with the Senior Software Engineer box wrapped in a separate keyboard focus ring outside its border">
          <figcaption>Una posición con el foco en el canvas: un anillo de acento separado rodea la caja, fuera de su propio borde, lista para Enter o las teclas de flecha.</figcaption>
        </figure>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Career-reset-layout-dialog.png' | relative_url }}" alt="Confirmation dialog asking whether to reset all positions to the automatic layout with a Reset layout button">
          <figcaption>La única confirmación del canvas: una disposición manual es lo único que no se puede recuperar.</figcaption>
        </figure>

        <h3 id="career-export">Exportar el plan de carrera</h3>
        <p>El menú <strong>Export</strong> de la cabecera de la barra lateral ofrece <strong>Save as Markdown</strong> y <strong>Save as PDF</strong>, un documento de toda la escalera que puedes llevar a una reunión de calibración, a un comité de promociones o a una conversación con tu propio manager. Un aviso confirma <em>"Career path saved as Markdown."</em> (o PDF). Escape cierra el menú y devuelve el foco a su botón.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Career-export-menu.png' | relative_url }}" alt="Export menu open in the Career path sidebar header offering Save as Markdown and Save as PDF">
          <figcaption>Exportar la escalera para una conversación de calibración.</figcaption>
        </figure>

        <div class="protocol-box amber">
          <div class="protocol-box__title">📖 Referencia del libro: Chapter 8 — Leveling Your Team Members</div>
          <p><em>"Everyone should be paid in line with their level. New joiners should be hired within the compensation boundaries of the level they are joining."</em> El método de niveles del Chapter 8 (alcance, autonomía e impacto, evaluados por la propia persona, el manager y sus pares, y luego calibrados) es una práctica, no un formulario. Trustline guarda la escalera y el lugar de cada persona en ella; las evidencias y la conversación de calibración siguen siendo tuyas, y las bandas salariales quedan fuera de su alcance.</p>
        </div>

        <p>También se admite una escalera compartida: en <a href="#preferences-shared-path">Preferences → Data → Shared career path</a> puedes apuntar el plan de carrera a una carpeta compartida con otros managers, de modo que todos trabajen con la misma definición de lo que significa un nivel. La regla del libro es que un rol debe significar lo mismo en todos los equipos.</p>
      </section>

      <!-- SECTION: TEAMS -->
      <section id="teams" class="docs-section">
        <h2>🏢 Equipos (Teams)</h2>
        <div class="protocol-box">
          <div class="protocol-box__title">📖 Referencia del libro: Chapter 10 — Team Management</div>
          <p><em>"We could say that team management is somehow an art, not in the sense of artistic creation, but in the sense of imagination, intuition, and care."</em> El marco práctico del capítulo son tres preguntas: qué puede romper un equipo desde dentro (las cinco disfunciones), qué puede romperlo desde fuera (la estructura, mediante Team Topologies) y qué hábitos lo mantienen sano (1-on-1s, feedback y chequeos de salud regulares).</p>
        </div>

        <p>La sección <strong>Teams</strong> agrupa a las personas a tu cargo en equipos y da a cada equipo su propio conjunto de registros. Para crear uno, abre <strong>Add team</strong> en la barra lateral e introduce un <strong>Name</strong> (obligatorio, por ejemplo <em>Platform</em>) y un <strong>Purpose</strong> opcional. Un equipo solo puede crearse a partir de personas que ya tienes; hasta entonces, la barra lateral dice <em>"Add a direct report first — a team is built from the people who report to you."</em> La barra lateral lista cada equipo con su número de miembros.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Teams-add-team-form.png' | relative_url }}" alt="Add team form open in the Teams sidebar with name and purpose fields above the list of Payments Platform and Checkout Experience">
          <figcaption>Añadir un equipo. El propósito responde a la primera afirmación de la capa LAN: una comprensión compartida de por qué existe el equipo.</figcaption>
        </figure>

        <p>Al seleccionar un equipo se abre una cabecera con su nombre y propósito, un selector <strong>Topology</strong> y un botón <strong>Export team page…</strong>, sobre siete pestañas: <strong>Roster</strong>, <strong>Working agreements</strong>, <strong>Decisions</strong>, <strong>Health</strong>, <strong>Experiments</strong>, <strong>Scoreboard</strong> e <strong>Interactions</strong>.</p>

        <h3>Topología</h3>
        <p>La sección de Team Topologies del Chapter 10 dice: <em>"Structure is not bureaucracy—it is clarity."</em> El selector <strong>Topology</strong> clasifica el equipo en uno de los cuatro tipos que describe el capítulo:</p>
        <ul>
          <li><strong>Stream-aligned:</strong> multifuncional y responsable de extremo a extremo de un flujo de trabajo. El valor por defecto del capítulo: si construyes bien un solo tipo de equipo, que sea este.</li>
          <li><strong>Platform:</strong> reduce la carga cognitiva de los equipos stream-aligned mediante herramientas internas y capacidades compartidas.</li>
          <li><strong>Enabling:</strong> temporal por diseño; ayuda a otro equipo a construir una capacidad y después se retira.</li>
          <li><strong>Complicated subsystem:</strong> es responsable de un área que requiere conocimiento especializado profundo. Créalo solo cuando la complejidad lo exija.</li>
        </ul>
        <p>El valor por defecto es <em>Not classified</em>. Clasificar un equipo es un acto deliberado, y la aplicación no te asume un tipo. La elección se guarda al instante.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Teams-topology-picker.png' | relative_url }}" alt="Team header for Payments Platform with the Topology drop-down open showing Not classified, Stream-aligned, Platform, Enabling and Complicated subsystem">
          <figcaption>La cabecera del equipo: la topología a la izquierda, la exportación de la página del equipo a la derecha.</figcaption>
        </figure>

        <h3 id="team-roster">Plantilla (Roster)</h3>
        <div class="protocol-box amber">
          <div class="protocol-box__title">📖 Referencia del libro: Part II Introduction, Chapter 6 — Building a Simple Status Snapshot, y Chapter 7 — Team Roles</div>
          <p><em>"You cannot improve what you cannot see, and you cannot measure progress without a clear baseline."</em> La instantánea del Chapter 6, una fila por persona, ya te dice más que la mayoría de los organigramas: en su ejemplo, una persona es <em>"a single point of failure."</em> La introducción de la Parte II añade que, en un equipo sano, los roles <em>"are not about status; they are about clarity, balance, and responsibility."</em></p>
        </div>

        <p>La pestaña <strong>Roster</strong> es la instantánea del estado del equipo. Se abre con, cuando corresponde, un recordatorio sobre el próximo chequeo de salud (consulta <a href="#team-health">Salud</a>), después tres listas derivadas, luego un resumen en cuatro partes de los rituales del equipo y, por último, los miembros.</p>
        <p>Las tres listas se calculan a partir de los roles que das a las personas, y nada de ello se almacena, así que no pueden quedar obsoletas:</p>
        <ul>
          <li><strong>Roles filled:</strong> cada rol distinto del equipo. <em>"No roles yet."</em> si está vacío.</li>
          <li><strong>Unfilled suggested roles:</strong> cuáles de los siete roles sugeridos no ocupa nadie: <em>Tech Lead</em>, <em>Software Engineer</em>, <em>Product</em>, <em>Design</em>, <em>QA</em>, <em>Data</em> y <em>Platform/DevOps</em>, en ese orden. Proceden de los roles multifuncionales que nombra el Chapter 6 (producto, ingeniería, QA, UX, DevOps y datos) más el tech lead. Son una indicación, no una norma: un equipo que deja algunos vacíos no está roto, simplemente sabe lo que ha decidido no cubrir. La comparación ignora mayúsculas y espacios.</li>
          <li><strong>Single points of failure:</strong> cualquier rol que ocupa exactamente una persona. Es la pregunta del Chapter 6, <em>qué se rompería si faltara durante un mes</em>, formulada de forma automática.</li>
        </ul>
        <p>En los datos de demostración, Payments Platform nombra tres roles propios (<em>Service owner</em>, <em>Technical direction</em> y <em>On-call lead</em>), cada uno ocupado por exactamente una persona, de modo que los tres aparecen en <em>Single points of failure</em>. Checkout Experience tiene a dos personas que comparten el rol <em>Engineer</em>, así que no tiene un punto único de fallo en ese rol.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Teams-roster-tab.png' | relative_url }}" alt="Payments Platform roster tab showing a health check due reminder, roles filled, unfilled suggested roles, single points of failure and the ritual summary">
          <figcaption>La pestaña Roster: la instantánea del equipo de un vistazo, y el único recordatorio suave que muestra la aplicación.</figcaption>
        </figure>

        <p>El resumen de rituales que hay debajo muestra cuatro grupos breves: <strong>Last health check</strong> (<em>fecha · N of 5 on average</em>, o <em>Never checked.</em>), <strong>Active experiments</strong> (cada uno con su fecha de revisión, marcada <em>overdue</em> cuando ha pasado), <strong>Scoreboard</strong> (<em>metric: now → target</em>) e <strong>Interactions</strong> (<em>other team · mode</em>).</p>

        <p>Bajo el resumen está la lista de miembros. Cada fila muestra un avatar, el nombre y <em>job title · career position</em>. Un campo de texto contiene <strong>el rol de la persona en este equipo</strong> (cambia al salir del campo), y un botón <strong>Remove</strong> la saca del equipo tras preguntar <em>"Remove from team?"</em>. Al quitarla sigue siendo una persona a tu cargo. Tres campos son deliberadamente distintos: la <em>posición</em> es su peldaño en la escalera, el <em>job title</em> es como la llama su empresa y el <em>team role</em> es el papel que desempeña aquí.</p>
        <p>El desplegable <strong>Add member</strong> ofrece una lista <strong>Direct report</strong> (solo personas que aún no están en el equipo) y <strong>Role on this team</strong>, un campo de texto libre que sugiere los roles anteriores. <strong>Team settings</strong> contiene <strong>Name</strong> y <strong>Purpose</strong> con <strong>Save</strong>, y un botón rojo <strong>Delete team</strong> que advierte <em>"Its working agreements, decisions log, health checks, experiments, scoreboard and interactions with other teams all go with it. Everyone on it stays one of your direct reports. This can't be undone."</em></p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Teams-roster-members.png' | relative_url }}" alt="Member rows for Mara Lindqvist, Priya Raghunathan and Noor Haddadi each with an editable team role and a Remove button, with the Add member and Team settings disclosures open below">
          <figcaption>Los miembros, sus roles en el equipo y los formularios Add member y Team settings.</figcaption>
        </figure>

        <p>El libro es claro: una instantánea no es una fotografía, sino una señal en directo; revísala cada trimestre, tras una reorganización y tras un incidente grave. En la práctica, es cuando editas los roles aquí.</p>

        <h3 id="team-agreements">Acuerdos de trabajo (Working agreements)</h3>
        <div class="protocol-box">
          <div class="protocol-box__title">📖 Referencia del libro: Chapter 10 — Fear of Conflict and Avoidance of Accountability</div>
          <p><em>"No one should fear conflict if the basic rules of conduct are clear. As the team leader, you should ensure that these rules are explicit, clear, and known by everyone."</em> La lista de comprobación de la rendición de cuentas añade que <em>"standards (quality, communication, ways of working) are explicit and shared."</em></p>
        </div>

        <p>La pestaña <strong>Working agreements</strong> es un gran campo de texto libre para <em>"how this team works together"</em>, guardado como un archivo Markdown que puedes leer sin la aplicación. Pulsa <strong>Save</strong> y aparece un discreto <em>Saved.</em> No hay ninguna estructura que la aplicación busque: escribe encabezados y listas como prefieras. En la demostración, Payments Platform registra lo que el equipo acordó no hacer los viernes, quién lleva cada semana el escudo de interrupciones, de qué es responsable el equipo y cómo contactar con él.</p>
        <p>Los acuerdos de trabajo no forman parte de la exportación de la página del equipo, ya que el archivo es tuyo para compartirlo. Es también el lugar natural para el "cómo trabajamos" que lee quien se incorpora en su primera semana.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Teams-working-agreements.png' | relative_url }}" alt="Working agreements tab for Payments Platform showing a Markdown text area with sections on how the team works, what it owns and how to reach it">
          <figcaption>Acuerdos de trabajo: Markdown plano, guardado en tu equipo y legible sin Trustline.</figcaption>
        </figure>

        <h3 id="team-decisions">Decisiones (Decisions)</h3>
        <div class="protocol-box">
          <div class="protocol-box__title">📖 Referencia del libro: Chapter 10 — Lack of Commitment</div>
          <p><em>"Make decisions clear and visible: who decided what, by when, and how it'll be communicated, so commitment is unambiguous."</em> La lista de comprobación del compromiso pide que <em>"at the end of discussions, decisions are clearly stated and written down,"</em> y que las puntuaciones bajas conduzcan a <em>"visible decision logs"</em> y a <em>"disagree and commit."</em></p>
        </div>

        <p>La pestaña <strong>Decisions</strong> es el registro del equipo. Sin ninguna aún, dice <em>"No decisions recorded yet. A decisions log is what stops the same argument being had twice."</em> Cada entrada muestra su título, la fecha en que se registró, lo que se decidió, su contexto y su responsable. La fecha se fija automáticamente al día en que la registras y no cambia cuando más tarde editas la entrada.</p>
        <p><strong>Record a decision</strong> abre un formulario con cuatro campos:</p>
        <ul>
          <li><strong>Title:</strong> obligatorio.</li>
          <li><strong>What was decided:</strong> obligatorio.</li>
          <li><strong>Context (optional) — why this came up:</strong> el razonamiento que de otro modo tendrías que recordar.</li>
          <li><strong>Owner (optional) — who follows through:</strong> un nombre.</li>
        </ul>
        <p>Pulsa <strong>Record</strong>. Cada entrada tiene <strong>Edit</strong> (el mismo formulario, con <strong>Save</strong> y <strong>Cancel</strong>) y <strong>Delete</strong>, que pide confirmación porque no se puede deshacer. En la demostración, Payments Platform ha registrado <em>"Settlement retries move to an outbox"</em> (responsable Mara Lindqvist) y <em>"No new consumers of the legacy ledger view"</em> (responsable Priya Raghunathan).</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Teams-decisions.png' | relative_url }}" alt="Decisions tab for Payments Platform listing two decisions with dates, context and owners and Edit and Delete buttons">
          <figcaption>El registro de decisiones: quién decidió qué, por qué y quién da seguimiento.</figcaption>
        </figure>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Teams-record-decision-form.png' | relative_url }}" alt="Record a decision form open with title, what was decided, context and owner fields and a Record button">
          <figcaption>Registrar una decisión lleva un minuto y acaba con la discusión sobre si alguna vez se tomó.</figcaption>
        </figure>

        <h3 id="team-health">Salud (Health)</h3>
        <div class="protocol-box">
          <div class="protocol-box__title">📖 Referencia del libro: Chapter 10 — Team Health Checks</div>
          <p><em>"Most teams only get a real 'health signal' when something already hurts… A team health check is a simple, recurring way to see those signals early, when a small adjustment can still fix them."</em> La cadencia del libro es de uno a tres meses para equipos estables, y lo importante es seguir tendencias, no la perfección: <em>"patterns matter more than absolute colors."</em> Usarlo para clasificar equipos o evaluar el rendimiento está en la lista del libro de lo que no se debe hacer.</p>
        </div>

        <p>La pestaña <strong>Health</strong> contiene los chequeos de salud del equipo. Arriba, <strong>Check this team</strong> fija la cadencia: <em>Every 4 weeks</em>, <em>Every 8 weeks</em> (por defecto) o <em>Every 12 weeks</em>. La cadencia solo activa un recordatorio suave, nunca un bloqueo. Cuando toca un chequeo, aparece una línea en las pestañas Roster y Health: <em>"Last checked 2026-08-05. This team is checked every 8 weeks, so one is due."</em> o, para un equipo nunca chequeado, <em>"This team has never been checked. Its cadence is every 8 weeks."</em></p>

        <h4>Los diez temas</h4>
        <p>Cada chequeo puntúa diez temas de <strong>1 (mal) a 5 (bien)</strong>. Siguen las dimensiones de salud de ejemplo del libro (las disfunciones de Lencioni y las lentes de Team Topologies del Chapter 10) más dos de los propios temas del Spotify Squad Health Check:</p>

        <table class="shortcuts-table">
          <thead>
            <tr>
              <th>Tema en Trustline</th>
              <th>La lente del libro</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><strong>Psychological safety and trust</strong></td><td>Ausencia de confianza: las personas se sienten seguras para admitir errores y pedir ayuda.</td></tr>
            <tr><td><strong>Healthy conflict</strong></td><td>Miedo al conflicto: podemos discrepar abiertamente sin dramatismo.</td></tr>
            <tr><td><strong>Clarity of direction</strong></td><td>Falta de compromiso: claridad y compromiso con las prioridades y las decisiones.</td></tr>
            <tr><td><strong>Mutual accountability</strong></td><td>Evitación de la responsabilidad: nos exigimos unos a otros el cumplimiento de nuestros estándares, no solo al manager.</td></tr>
            <tr><td><strong>Focus on collective results</strong></td><td>Desatención a los resultados: nos importan más los resultados del equipo que las hazañas individuales.</td></tr>
            <tr><td><strong>Flow of work</strong></td><td>Flujo y entrega: el trabajo avanza con una velocidad y una previsibilidad razonables.</td></tr>
            <tr><td><strong>Technical practices</strong></td><td>Salud técnica: la calidad del código, la automatización y la deuda parecen bajo control.</td></tr>
            <tr><td><strong>Team structure and size</strong></td><td>Estructura del equipo: las responsabilidades y las interacciones con otros equipos están claras.</td></tr>
            <tr><td><strong>Learning and growth</strong></td><td>De los temas de Spotify: progresión profesional y formación recibida.</td></tr>
            <tr><td><strong>Transparency of information</strong></td><td>De los temas de Spotify: transparencia.</td></tr>
          </tbody>
        </table>

        <h4>Tendencia por tema</h4>
        <p>Bajo el selector de cadencia, <strong>Trend by theme</strong> lista los diez temas con un pequeño gráfico de líneas de cada puntuación que el equipo le ha dado y el último valor (<em>4 of 5</em>, o <em>not scored</em>). Hasta el primer chequeo dice <em>"Nothing to trend yet — the first check draws the first point."</em> Los gráficos llevan descripciones de texto para lectores de pantalla. Aquí es donde el declive lento sobre el que advierte el libro se hace visible mientras aún tiene arreglo: en la demostración, la confianza de Payments Platform sube mientras su flujo de trabajo se deteriora.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Teams-health-tab.png' | relative_url }}" alt="Health tab for Payments Platform showing the cadence picker, a trend sparkline for each of ten themes and the list of past checks">
          <figcaption>La pestaña Health: diez líneas de tendencia, cada una con una puntuación por chequeo, a lo largo del tiempo.</figcaption>
        </figure>

        <h4>Hacer un chequeo</h4>
        <p>Abre <strong>Run a check</strong>. El formulario lista los diez temas, cada uno con un control deslizante de 1 a 5 (3 por defecto), su valor actual y una <em>Note</em> opcional; debajo hay una <strong>Overall note (optional)</strong>. Pulsa <strong>Save check</strong>; el chequeo se fecha hoy. Se aplica el formato de sesión del libro: puntuar primero de forma individual, discutir los extremos y salir con uno a tres experimentos en lugar de una puntuación perfecta. Haz la puntuación con el equipo y después introduce el resultado.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Teams-health-run-check-form.png' | relative_url }}" alt="Run a check form with ten theme sliders, optional notes and an overall note field">
          <figcaption>Registrar un chequeo: una puntuación y una nota opcional por cada tema.</figcaption>
        </figure>

        <h4>Chequeos anteriores</h4>
        <p><strong>Past checks</strong> lista todos los chequeos, del más reciente al más antiguo, como <em>Health check · N of 5</em> (la media) con su fecha, la nota general y la puntuación de cada tema. Cada uno tiene <strong>Edit</strong> y <strong>Delete</strong>. Al eliminar se pregunta antes, y los experimentos que el chequeo haya motivado permanecen y simplemente dejan de apuntar a él.</p>
        <p>Las notas de salud son privadas para ti. Nunca salen de la aplicación a menos que exportes toda la carpeta de datos, y nunca forman parte de la página del equipo.</p>

        <h3 id="team-experiments">Experimentos (Experiments)</h3>
        <div class="protocol-box">
          <div class="protocol-box__title">📖 Referencia del libro: Chapter 10 — Goal &amp; Success Criteria, y the 30-Minute Light Version</div>
          <p><em>"Success = we end with 1–3 concrete experiments, owners, and check-in dates, not a perfect score."</em> Define <em>"a concrete experiment… assign an owner and a date when you'll check if it helped."</em> Y no lo olvides: <em>"add a 5-minute 'check last experiment' slot to the next retro."</em></p>
        </div>

        <p>La pestaña <strong>Experiments</strong> es donde los hallazgos de un chequeo se convierten en acción. Cuando está vacía dice <em>"Nothing being tried yet. One to three small experiments out of a health check is the usual dose."</em> Los experimentos activos se listan primero. Cada uno muestra su título y una insignia de estado, un <em>Review &lt;date&gt;</em>, una insignia <em>Review overdue</em> cuando esa fecha ha pasado con el experimento aún activo, su <em>Success signal</em> y, si se han definido, la hipótesis, el responsable, las notas y el chequeo de salud que lo motivó.</p>
        <p>El estado puede cambiarse directamente en la fila, desde un desplegable: <em>Planned</em>, <em>In progress</em>, <em>Reviewed — it worked</em>, <em>Reviewed — it didn't</em> o <em>Cancelled</em>. Cada fila tiene también <strong>Edit</strong> y <strong>Delete</strong>. Marcar un experimento como cancelado conserva el registro de que se probó, lo cual es mejor que eliminarlo.</p>
        <p><strong>Start an experiment</strong> pide:</p>
        <ul>
          <li><strong>Title:</strong> obligatorio.</li>
          <li><strong>Hypothesis (optional) — what you expect to happen.</strong></li>
          <li><strong>Owner (optional):</strong> un miembro del equipo, o quien corresponda.</li>
          <li><strong>Success signal — how you'll know it worked:</strong> obligatorio. La indicación del libro es una medida concreta y observable.</li>
          <li><strong>Review date:</strong> obligatorio. Es la fecha de revisión que pide el libro.</li>
          <li><strong>Notes (optional).</strong></li>
          <li><strong>Prompted by:</strong> se ofrece al crear uno, si el equipo tiene algún chequeo: vincula el experimento con el chequeo que lo sugirió. Un vínculo no puede reasignarse después.</li>
        </ul>
        <p>Pulsa <strong>Start</strong> (o <strong>Save</strong> al editar). En la demostración, Payments Platform tiene tres experimentos en tres estados: <em>"Rotate an interrupt shield weekly"</em> está en curso, <em>"Stop deploying on Fridays"</em> está revisado y funcionó (ahora es un acuerdo de trabajo) y <em>"Hand the ledger service to its consumers"</em> está planificado.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Teams-experiments.png' | relative_url }}" alt="Experiments tab for Payments Platform listing three experiments: one in progress, one reviewed and successful, and one planned, each with a success signal and review date">
          <figcaption>Experimentos: cada uno responde a una puntuación de salud, tiene un responsable y una fecha de revisión, y termina en un veredicto.</figcaption>
        </figure>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Teams-experiment-form.png' | relative_url }}" alt="Start an experiment form with title, hypothesis, owner, success signal, review date, notes and Prompted by fields">
          <figcaption>Iniciar un experimento: una hipótesis, una señal y una fecha para comprobarlo.</figcaption>
        </figure>

        <h3 id="team-scoreboard">Marcador (Scoreboard)</h3>
        <div class="protocol-box">
          <div class="protocol-box__title">📖 Referencia del libro: Chapter 10 — Inattention to Results</div>
          <p><em>"Keep a shared scoreboard: define and track collective results so everyone orients to the same outcomes."</em> La lista de comprobación pide que <em>"the team has a small set of shared outcome metrics everyone cares about,"</em> y el remedio del libro para una puntuación baja es <em>"revisit your shared scoreboard and incentives."</em></p>
        </div>

        <p>La pestaña <strong>Scoreboard</strong> contiene una lista corta de números que todo el equipo puede recitar, con la indicación <em>"A handful the whole team can recite beats a dashboard nobody opens."</em> Para mantenerla corta a propósito, admite hasta ocho métricas. <strong>Add a metric</strong> pide:</p>
        <ul>
          <li><strong>Metric:</strong> el nombre, como <em>Change failure rate</em>.</li>
          <li><strong>What it measures (optional).</strong></li>
          <li><strong>Where it is now</strong> y <strong>Where it should be:</strong> texto libre, de modo que un porcentaje, una duración y un simple recuento puedan convivir en la misma tabla.</li>
          <li><strong>Unit (optional):</strong> por ejemplo <em>ms</em>, <em>%</em>, <em>per week</em>.</li>
        </ul>
        <p>Cada fila muestra <em>now → target</em> y un <em>Updated &lt;date&gt;</em> que la aplicación fija cada vez que guardas. Las filas tienen <strong>Edit</strong> y <strong>Delete</strong> (<em>"Drop metric?"</em>). En la demostración, Payments Platform sigue la tasa de fallos de cambios (14 %, objetivo por debajo del 10 %), el tiempo de restauración (42 min, objetivo por debajo de 1 hora), el trabajo no planificado (38 %, objetivo por debajo del 20 %) y los endpoints del ledger traspasados (5, objetivo 12).</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Teams-scoreboard.png' | relative_url }}" alt="Scoreboard tab for Payments Platform listing four metrics each with a current value, a target and an updated date">
          <figcaption>El marcador: cuatro números, cada uno con dónde está y dónde debería estar.</figcaption>
        </figure>

        <h3 id="team-interactions">Interacciones (Interactions)</h3>
        <div class="protocol-box">
          <div class="protocol-box__title">📖 Referencia del libro: Chapter 10 — Team Topologies &amp; Structure (The Three Interaction Modes)</div>
          <p><em>"Misusing these modes is one of the most common structural mistakes. A platform team forced into constant collaboration loses its leverage. An enabling team that never steps back creates dependency."</em> El libro dice también que se revisen los modos de interacción con regularidad: <em>"collaboration that was necessary six months ago may now be creating unhealthy dependency."</em></p>
        </div>

        <p>La pestaña <strong>Interactions</strong> registra cómo deben trabajar juntos dos equipos. Su indicación es exacta: <em>"One record per pair of teams, edited from either side and shown on both."</em> Una interacción necesita dos equipos, y la pestaña lo dice hasta que tienes un segundo.</p>
        <p><strong>Record an interaction</strong> pide:</p>
        <ul>
          <li><strong>The other team:</strong> obligatorio, elegido entre tus otros equipos (queda fijo una vez registrado).</li>
          <li><strong>Mode:</strong> <em>Collaboration</em> (trabajar estrechamente durante un periodo definido; es costoso y debe ser temporal), <em>X-as-a-Service</em> (un equipo consume lo que el otro ofrece, con un mínimo de idas y venidas; debe ser duradero) o <em>Facilitation</em> (un equipo acompaña al otro y se retira).</li>
          <li><strong>Notes (optional).</strong></li>
          <li><strong>Review date (optional):</strong> cuándo preguntarse si el modo sigue siendo el adecuado.</li>
        </ul>
        <p>Cada fila muestra el nombre del otro equipo, su modo, las notas, si las hay, y un <em>Review &lt;date&gt;</em>, con <strong>Edit</strong> y <strong>Delete</strong>. Eliminar borra el registro de ambos equipos. En la demostración, Checkout Experience consume la API de pagos de Payments Platform como <em>X-as-a-Service</em>, con fecha de revisión 2026-11-30.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Teams-interactions.png' | relative_url }}" alt="Interactions tab for Checkout Experience showing one record with Payments Platform in X-as-a-Service mode, notes and a review date">
          <figcaption>Una interacción entre dos equipos, visible en ambos.</figcaption>
        </figure>
      </section>

      <!-- SECTION: TEAM PAGE EXPORT -->
      <section id="team-page" class="docs-section">
        <h2>📄 Exportar la página del equipo (Team Page Export)</h2>
        <div class="protocol-box">
          <div class="protocol-box__title">📖 Referencia del libro: Chapter 10 — Communicate Results to Stakeholders Without Exposing Individuals</div>
          <p><em>"Always keep in mind that this is a team exercise, and you are not looking for guilty individuals… present it as a whole and don't point to specific behaviors or individuals."</em></p>
        </div>

        <p>Una página de equipo es la parte del registro de un equipo que pertenece al equipo, escrita como un único archivo Markdown que puedes dejar en una wiki o en un repositorio. En la cabecera del equipo, <strong>Export team page…</strong> abre un pequeño menú con dos opciones sin marcar y un botón <strong>Export…</strong>. Púlsalo, elige una carpeta y Trustline escribe allí <code>&lt;team name&gt;.md</code> y confirma <em>"Team page saved to &lt;path&gt;."</em> Exportar de nuevo reemplaza el mismo archivo y no toca nada más de la carpeta. Escape cierra el menú.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-TeamPage-export-menu.png' | relative_url }}" alt="Export team page menu open showing the Include latest health scores and Include career path checkboxes and an Export button">
          <figcaption>El menú de exportación: las dos secciones opcionales empiezan sin marcar, porque lo que sale de tus notas privadas es decisión tuya.</figcaption>
        </figure>

        <p><strong>Siempre se incluye:</strong> el nombre y el propósito del equipo, la fecha de exportación, los miembros con sus roles en el equipo, el registro de decisiones, el tipo de equipo y sus interacciones con otros equipos (modo y fecha de revisión), el marcador y los experimentos (estado, hipótesis, señal de éxito, responsable y fecha de revisión).</p>
        <p><strong>Se incluye solo si lo marcas para esa exportación:</strong></p>
        <ul>
          <li><strong>Include latest health scores:</strong> añade una sección <em>Team health</em> con la puntuación más reciente de cada tema y la fecha en que se evaluó.</li>
          <li><strong>Include career path:</strong> añade todo el plan de carrera como una sección anidada.</li>
        </ul>
        <p><strong>Nunca se incluye, por diseño:</strong> nada de tus one-to-ones (sesiones, notas de agenda, tareas), el correo ni el cargo de una persona, las notas de los chequeos de salud ni las notas de experimentos o interacciones. El documento no tiene sitio donde ponerlos, así que ningún ajuste puede filtrarlos.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-TeamPage-exported-markdown.png' | relative_url }}" alt="The exported Payments Platform Markdown file open in a text editor showing members, decisions, team topology, scoreboard and experiments sections">
          <figcaption>Una página de equipo exportada, abierta en un editor de texto plano: la parte de la historia que corresponde al equipo, lista para compartir.</figcaption>
        </figure>
      </section>

      <!-- SECTION: PREFERENCES -->
      <section id="preferences" class="docs-section">
        <h2>⚙️ Preferencias (Preferences)</h2>
        <p>El engranaje al pie de la barra de actividad abre <strong>Preferences</strong>, un diálogo con cuatro páginas: <strong>Appearance</strong>, <strong>Data</strong>, <strong>Email relay</strong> y <strong>About</strong>. Ciérralo con la <strong>×</strong> de la esquina o haciendo clic fuera. La mayoría de los selectores se guardan en el momento en que los cambias.</p>

        <h3 id="preferences-appearance">Appearance</h3>
        <ul>
          <li><strong>Base color scheme:</strong> <em>Adapt to system</em>, <em>Light</em> o <em>Dark</em>. Se aplica al instante.</li>
          <li><strong>PDF export theme:</strong> con cuál de los aspectos propios de la aplicación se genera una sesión al exportarla como PDF, independientemente del esquema en pantalla: <em>Paper (light)</em>, <em>Circuit (dark)</em> o <em>Signal (light, cyan accent)</em>.</li>
        </ul>
        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Preferences-appearance.png' | relative_url }}" alt="Preferences Appearance page with the base color scheme selector and the PDF export theme selector">
          <figcaption>Appearance: el esquema en pantalla y el tema del PDF se fijan de forma independiente.</figcaption>
        </figure>

        <h3 id="preferences-data">Data</h3>
        <p>La página Data es la más larga y contiene todo lo relativo a dónde viven tus registros y cómo salen.</p>

        <h4>Ubicación del almacenamiento</h4>
        <p>La página muestra <em>"Currently storing data at:"</em> y la carpeta activa. Para usar otra, escribe una ruta en <strong>Custom location</strong> (déjalo en blanco para usar la predeterminada) y pulsa <strong>Save</strong>; <strong>Reset to default</strong> vuelve atrás. El cambio surte efecto en el siguiente arranque, y la página dice <em>"Restart the app to start using &lt;path&gt;."</em> Cambiar la ubicación no mueve los archivos existentes. Cópialos primero, o empezarás con un registro vacío.</p>
        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Preferences-data-location.png' | relative_url }}" alt="Preferences Data page showing the current data folder, a custom location field and Save and Reset to default buttons">
          <figcaption>Ubicación de los datos: la predeterminada es la carpeta de datos de aplicación de tu sistema operativo.</figcaption>
        </figure>

        <h4 id="preferences-trash">Trash</h4>
        <p>Una persona eliminada espera aquí <strong>30 días</strong> con sus sesiones y pertenencias a equipos, y después se borra en el siguiente arranque. La papelera vacía dice <em>"The trash is empty."</em> Cada entrada muestra el nombre y bien <em>"N days until it is erased"</em>, bien <em>"Erased at the next launch"</em>, con dos botones:</p>
        <ul>
          <li><strong>Restore:</strong> recupera a la persona con sus sesiones y pertenencias a equipos.</li>
          <li><strong>Delete forever:</strong> pide confirmación y después borra a esa persona al instante.</li>
        </ul>
        <p><strong>Empty trash</strong> (en rojo) borra todas las entradas tras confirmar. Las copias que exportaste o respaldaste conservan los datos, ya que Trustline nunca llega a ellas.</p>
        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Preferences-trash.png' | relative_url }}" alt="Trash list in Preferences with one deleted report showing days until it is erased and Restore and Delete forever buttons">
          <figcaption>La papelera: treinta días de red de seguridad para una persona eliminada.</figcaption>
        </figure>

        <h4 id="preferences-shared-path">Shared career path</h4>
        <p>Apunta el plan de carrera a una carpeta compartida con otras instalaciones (una carpeta de Dropbox, iCloud u OneDrive, o un recurso de red) para que todos trabajéis con la misma escalera. <em>"Reports and session notes above stay private — this only affects the career ladder."</em> Tiene su propio <strong>Custom location</strong>, <strong>Save</strong> y <strong>Reset to default</strong> y, como la ubicación de los datos, surte efecto tras un reinicio. Esta instalación se identifica como <em>user@device</em> en la línea de debajo, y esa etiqueta aparece en el error si otra instalación está guardando justo en el mismo momento. Que dos personas editen con segundos de diferencia es un riesgo raro y aceptado, y Trustline pide a una de ellas que lo intente de nuevo en lugar de sobrescribir en silencio a la otra.</p>
        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Preferences-shared-career-path.png' | relative_url }}" alt="Shared career path section of Preferences Data with the active location, a custom location field and the writer label line">
          <figcaption>Una escalera compartida: una sola definición de lo que significa cada nivel, entre managers.</figcaption>
        </figure>

        <h4 id="preferences-handoff">Threadline hand-off</h4>
        <p>El puente hacia la Inbox de Threadline. <strong>Folder Threadline watches</strong> es la carpeta que has configurado como conector de texto plano en Threadline (déjala en blanco para que te la pida en la siguiente exportación). <strong>Save</strong> la guarda, <strong>Reset</strong> la olvida y <strong>Export my open action items</strong> escribe los archivos e informa <em>"Exported N open action items to Threadline (M removed)."</em></p>
        <ul>
          <li><strong>Qué se exporta:</strong> las tareas abiertas que te corresponden. Las tareas de la otra persona, las terminadas y las notas de agenda nunca se exportan, y una tarea arrastrada durante varias sesiones se exporta una sola vez.</li>
          <li><strong>Formato:</strong> un archivo por tarea, llamado <code>trustline-action-&lt;id&gt;.md</code>, con exactamente una línea <code>- [ ] description</code>. Sin nombre de la persona y sin metadatos.</li>
          <li><strong>Volver a exportar</strong> reescribe los mismos archivos y elimina el de cualquier tarea que ya no esté abierta. Solo elimina archivos con exactamente ese patrón de nombre; todo lo demás de la carpeta queda intacto.</li>
          <li><strong>La redacción importa:</strong> Threadline identifica una línea por archivo y contenido, así que cambiar la redacción de una tarea exportada crea un segundo elemento en la Inbox. Escribe descripciones que se sostengan solas y nombren el proyecto o el tema.</li>
        </ul>
        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Preferences-threadline-handoff.png' | relative_url }}" alt="Threadline hand-off section of Preferences Data with the folder field, Save, Reset and Export my open action items buttons">
          <figcaption>El traspaso: un compromiso adquirido en la capa LAN se convierte en un elemento de la Inbox en la capa CPU.</figcaption>
        </figure>

        <h4 id="preferences-backup">Exportación y copia de seguridad</h4>
        <p><strong>Export all data</strong> copia todos los archivos de personas, sesiones, equipos y plan de carrera, exactamente como están en el disco, en una carpeta nueva llamada <em>Trustline export YYYY-MM-DD HHMMSS</em> dentro de una carpeta que eliges cada vez. <strong>Back up now</strong> hace lo mismo en la <strong>Backup folder</strong> que fijas una sola vez (déjala en blanco para que te la pida en la siguiente copia), en una carpeta llamada <em>trustline-backup-YYYYMMDD-HHMMSS</em>. <strong>Save</strong> y <strong>Reset</strong> gestionan esa carpeta.</p>
        <ul>
          <li>Nunca se reemplaza ni se elimina nada. Se rechaza un destino que ya existe, y una copia interrumpida se elimina en lugar de quedar con apariencia de terminada.</li>
          <li>La carpeta de copia de seguridad nunca se crea por ti, así que una unidad desconectada se notifica en lugar de sustituirse en silencio por una carpeta en el disco del sistema.</li>
          <li>Se excluyen el registro de diagnóstico y el archivo que contiene tu nombre de usuario de correo.</li>
          <li>Las copias <strong>no están cifradas</strong> y conservan todo tal como estaba, papelera incluida. Eliminar definitivamente a una persona más adelante no alcanza a una copia que ya hiciste. Guárdalas en un lugar de confianza.</li>
          <li>No hay programación ni limpieza: una copia se hace cuando pulsas el botón, y las antiguas permanecen hasta que las borras. Para restaurar, cierra la aplicación y copia los archivos de vuelta a la carpeta de datos.</li>
        </ul>
        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Preferences-export-backup.png' | relative_url }}" alt="Export and backup section of Preferences Data with Export all data, a backup folder field and Back up now">
          <figcaption>Exportación y copia de seguridad: una copia simple de archivos simples.</figcaption>
        </figure>

        <h3 id="preferences-email">Email relay</h3>
        <p>El relé es lo que usan <em>Send agenda</em>, <em>Check for replies</em> y <em>Email as…</em>. Trustline envía a través de tu propia cuenta de correo; no tiene servidor de correo propio. La página empieza explicando dónde va la contraseña: en el almacén de credenciales del propio sistema operativo (Keychain, Credential Manager o Secret Service), nunca en un archivo que escriba esta aplicación.</p>
        <ul>
          <li><strong>Sending:</strong> <strong>SMTP host</strong> (p. ej. <em>smtp.example.com</em>), <strong>Port</strong> (p. ej. 587), <strong>Username</strong> y <strong>Password</strong>. Deja la contraseña en blanco en un guardado posterior para conservar la almacenada; si hay una definida, la etiqueta dice <em>"Password (already set — leave blank to keep it)"</em>.</li>
          <li><strong>Checking for replies (optional):</strong> <strong>IMAP host</strong> y <strong>Port</strong> (p. ej. 993). Usa el mismo usuario y la misma contraseña. Déjalo en blanco para enviar agendas sin recoger respuestas.</li>
          <li><strong>Emailed exports → Signature:</strong> <em>Trustline mark and credit</em> o <em>None</em>. Se aplica a las exportaciones de sesión enviadas desde el menú Export; la agenda nunca se firma.</li>
          <li><strong>Save</strong> guarda los ajustes (<em>"Email relay settings saved."</em>), y <strong>Clear</strong> elimina el host, el puerto, el usuario y la contraseña almacenada.</li>
        </ul>
        <p>Si el llavero del sistema no está disponible, por ejemplo en una sesión de Linux sin Secret Service, la página lo indica bajo el campo de contraseña: <em>"Kept for this session only — the system keychain isn't available. You'll be asked for it again next launch."</em> La contraseña se mantiene entonces en memoria durante esa sesión y nunca se escribe en el disco.</p>
        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Preferences-email-relay-sending.png' | relative_url }}" alt="Email relay page of Preferences with SMTP host, port, username and password fields">
          <figcaption>La mitad de envío del relé. El campo de contraseña nunca se rellena previamente.</figcaption>
        </figure>
        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Preferences-email-relay-replies-signature.png' | relative_url }}" alt="Lower part of the Email relay page showing IMAP host and port, the emailed exports signature selector and the Save and Clear buttons">
          <figcaption>Consultar respuestas es opcional, y la firma de las exportaciones por correo puede desactivarse.</figcaption>
        </figure>

        <h3 id="preferences-about">About</h3>
        <p>La página About muestra el logotipo de Trustline, la versión instalada (por ejemplo <em>Version 1.2.0</em>), una línea que indica si existe una versión más reciente (<em>"Up to date."</em> o <em>"Version X is available."</em>), la nota <em>"Built on The Engineering Protocol Stack,"</em> y el selector de comprobación de actualizaciones que se describe a continuación.</p>
        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Preferences-about.png' | relative_url }}" alt="About page of Preferences showing the Trustline logo, the version number, an up to date line and the Check for new versions selector">
          <figcaption>About: la versión, si está al día y el único ajuste de red que tiene la aplicación.</figcaption>
        </figure>
      </section>

      <!-- SECTION: UPDATES -->
      <section id="updates" class="docs-section">
        <h2>⬆️ Actualizaciones (Updates)</h2>
        <p>Trustline puede avisarte cuando existe una versión más reciente y puede instalarla en el sitio. Ambas cosas son decisión tuya.</p>

        <h3>La comprobación diaria</h3>
        <p><strong>Preferences → About → Check for new versions</strong> tiene dos ajustes: <em>Check once a day</em> (por defecto) y <em>Never check</em>. Con la comprobación activada, Trustline pregunta a GitHub, como máximo una vez al día al arrancar, cuál es la última versión publicada. La petición es una simple lectura de una página pública: lleva la versión de la aplicación en su User-Agent y nada más, sin identificador y sin nada sobre ti ni tus notas. Desactivar la comprobación significa que la aplicación no contacta con ningún servidor que no hayas nombrado tú mismo. El cambio se aplica desde el siguiente arranque, porque la comprobación se ejecuta una vez al iniciar.</p>

        <h3>El aviso de actualización</h3>
        <p>Cuando existe una versión más reciente, aparece un aviso en la esquina que dice <em>"Trustline X is available. You have Y."</em> Permanece hasta que lo respondes. El botón depende de cómo instalaste Trustline:</p>
        <ul>
          <li><strong>Install now:</strong> disponible en macOS, Windows y el AppImage de Linux. Al pulsarlo descarga la actualización, verifica que lleva la firma de Trustline, la instala y reinicia la aplicación. Una actualización que no lleve la firma se rechaza, y Trustline sigue funcionando como estaba. No se descarga nada hasta que pulses el botón.</li>
          <li><strong>Download:</strong> para instalaciones que no pueden actualizarse por sí mismas, como un paquete <code>.deb</code>. Abre la página del producto en tu navegador para que descargues el nuevo instalador a mano.</li>
        </ul>
        <p>Descarta el aviso con su botón de cierre o con Escape. Esa versión ya no se vuelve a anunciar, aunque la página About sigue indicando que está disponible. Si falla una instalación, el aviso da una frase llana y un botón <strong>Download</strong>. Si tienes la versión 0.3.0 o anterior, actualiza una vez desde el sitio web; las versiones posteriores se instalan en el sitio.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Updates-notice-install-now.png' | relative_url }}" alt="Trustline with a one-to-one open and an update notice in the corner naming the new version and the installed one with an Install now button">
          <figcaption>El aviso de actualización: nombra ambas versiones y no hace nada hasta que pulsas Install now.</figcaption>
        </figure>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Updates-about-update-available.png' | relative_url }}" alt="About page of Preferences with a line saying a newer version is available above the update check selector">
          <figcaption>La línea de About conserva el dato después de descartar el aviso: descartar detiene la interrupción, no la información.</figcaption>
        </figure>
      </section>

      <!-- SECTION: PRIVACY -->
      <section id="privacy" class="docs-section">
        <h2>🔒 Privacidad y datos</h2>
        <div class="protocol-box">
          <div class="protocol-box__title">📖 Referencia del libro: Chapter 10 — Absence of Trust</div>
          <p><em>"Start with trust: create safety for vulnerability (admitting errors, asking for help) or everything else becomes theater."</em> Una herramienta que guarda tus observaciones privadas sobre las personas que confían en ti tiene que merecer ella misma esa confianza.</p>
        </div>

        <p>La materia de Trustline son notas privadas sobre personas identificables, así que su modelo de privacidad es deliberadamente simple: tus registros viven en tu equipo y en ningún otro sitio.</p>

        <h3>Qué se guarda y dónde</h3>
        <p>Todo está en tu <a href="#getting-started">carpeta de datos</a>, como archivos planos:</p>
        <ul>
          <li><code>reports.json</code>: las personas a tu cargo.</li>
          <li><code>sessions/</code>: un archivo Markdown por one-to-one, legible en cualquier editor.</li>
          <li><code>positions.json</code>, <code>groups.json</code> y <code>career-path-layout.json</code>: el plan de carrera (viven en la carpeta compartida si has definido una).</li>
          <li><code>teams.json</code> y <code>team-interactions.json</code>, además de una carpeta <code>teams/&lt;id&gt;/</code> para cada equipo con <code>working-agreements.md</code>, <code>health-checks.json</code>, <code>experiments.json</code> y <code>scoreboard.json</code>.</li>
          <li><code>trash.json</code>: las personas que esperan a que pasen sus treinta días.</li>
          <li><code>trustline.log</code>: un pequeño registro de diagnóstico. Anota ubicaciones de archivos e identificadores de registros, nunca nombres ni nada que hayas escrito: cada fragmento entrecomillado se sustituye antes de escribirse. Cuando supera 1 MiB se renombra a <code>trustline.log.1</code> en el siguiente arranque, reemplazando cualquier anterior, de modo que ocupa unos dos megabytes como máximo. Nunca sale de tu equipo; puedes abrirlo, o enviárselo a alguien a mano si quieres ayuda.</li>
        </ul>
        <p>Un pequeño <code>preferences.json</code> recuerda tus ajustes, incluidos el host y el usuario del correo pero nunca la contraseña. Siempre está en la carpeta predeterminada de datos de aplicación, incluso si mueves los datos, para que la aplicación pueda encontrar el resto. En macOS y Linux, los archivos solo son legibles por tu cuenta de usuario. Se escriben de forma atómica para que un guardado interrumpido nunca deje un registro a medias, y un archivo en un formato antiguo se copia a una copia <code>.bak</code> a su lado (por ejemplo <code>reports.json.v0.bak</code>) la primera vez que lo lee la nueva versión, antes de que se guarde nada encima. Esa copia nunca se sobrescribe, de modo que se mantiene como la copia previa a la actualización, y puedes borrarla cuando estés satisfecho con la actualización. Si un archivo no puede leerse al arrancar, Trustline lo deja exactamente como estaba, nunca guarda sobre él y lo nombra en un diálogo con un botón <em>Open data folder</em>.</p>

        <figure class="docs-figure">
          <img src="{{ '/assets/images/trustline/docs/Trustline-Privacy-data-folder.png' | relative_url }}" alt="File manager showing the trustline data folder with reports.json, sessions, teams and other plain files">
          <figcaption>La carpeta de datos en un gestor de archivos: archivos corrientes que puedes leer, copiar y respaldar con herramientas corrientes.</figcaption>
        </figure>

        <h3>Qué viaja por la red</h3>
        <p>Trustline no hace ninguna petición de red por su cuenta salvo las que siguen, y la propia ventana de la aplicación no abre ninguna. Cada una está desactivada hasta que la activas, o está descrita y puede desactivarse.</p>
        <table class="shortcuts-table">
          <thead>
            <tr>
              <th>Destino</th>
              <th>Cuándo</th>
              <th>Qué se envía</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>GitHub</strong> (la página pública de versiones)</td>
              <td>Al arrancar, como máximo una vez al día, salvo que fijes <em>Never check</em>.</td>
              <td>Una simple lectura de la última versión. La versión de la aplicación en el User-Agent; ningún identificador, ningún dato sobre ti.</td>
            </tr>
            <tr>
              <td><strong>GitHub</strong> (el instalador)</td>
              <td>Solo después de que pulses <em>Install now</em>.</td>
              <td>La descarga de la actualización, aceptada solo si su firma coincide con la clave integrada de Trustline.</td>
            </tr>
            <tr>
              <td><strong>Tu servidor SMTP</strong></td>
              <td>Cuando envías una agenda o una exportación por correo. Desactivado hasta que lo configuras.</td>
              <td>El mensaje que has redactado y su adjunto, y tu usuario y contraseña para ese servidor.</td>
            </tr>
            <tr>
              <td><strong>Tu servidor IMAP</strong></td>
              <td>Cuando pulsas <em>Check for replies</em>. Desactivado hasta que lo configuras.</td>
              <td>Tu usuario y contraseña; se busca en el buzón respuestas a las agendas de la propia Trustline.</td>
            </tr>
          </tbody>
        </table>
        <p>No hay <strong>telemetría, analítica ni informes de fallos</strong>. Un manager que no ha configurado el correo y ha desactivado la comprobación de actualizaciones no hace ninguna petición. El correo usa TLS o STARTTLS. La página del producto en este sitio solo se abre en tu navegador cuando eliges <em>Download</em>, y es el navegador, no la aplicación, quien hace esa petición.</p>

        <h3>Sacar tus datos y borrarlos</h3>
        <ul>
          <li>El registro completo de una persona: <a href="#exports-report">Export this report's data</a>.</li>
          <li>Todo: <a href="#preferences-backup">Export all data</a> o <a href="#preferences-backup">Back up now</a>.</li>
          <li>Borrar a una persona: elimina a la persona y después <a href="#preferences-trash">Delete forever</a> desde la papelera. Recuerda que las copias que exportaste o respaldaste conservan los datos hasta que las borres tú mismo.</li>
        </ul>
      </section>

      <!-- SECTION: KEYBOARD SHORTCUTS -->
      <section id="keyboard-shortcuts" class="docs-section">
        <h2>⌨️ Referencia completa de atajos de teclado</h2>
        <p>Trustline se maneja con las teclas estándar: <kbd>Tab</kbd> y <kbd>Shift</kbd> + <kbd>Tab</kbd> se mueven entre controles, y <kbd>Enter</kbd> o <kbd>Space</kbd> pulsan el control enfocado. Todos los controles tienen un anillo de foco visible. Además, existen estos atajos.</p>

        <table class="shortcuts-table">
          <thead>
            <tr>
              <th>Atajo</th>
              <th>Acción</th>
              <th>Contexto</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><kbd>Cmd/Ctrl</kbd> + <kbd>Enter</kbd></td>
              <td>Añadir la tarea que estás escribiendo</td>
              <td>Campo New action item de una sesión</td>
            </tr>
            <tr>
              <td><kbd>Enter</kbd> o <kbd>Space</kbd></td>
              <td>Abrir la posición o el itinerario enfocado</td>
              <td>Canvas del plan de carrera</td>
            </tr>
            <tr>
              <td><kbd>←</kbd> <kbd>↑</kbd> <kbd>→</kbd> <kbd>↓</kbd></td>
              <td>Mover la posición o el itinerario enfocado un paso de cuadrícula</td>
              <td>Canvas del plan de carrera</td>
            </tr>
            <tr>
              <td><kbd>Shift</kbd> + tecla de flecha</td>
              <td>Mover la posición o el itinerario enfocado cuatro pasos de cuadrícula</td>
              <td>Canvas del plan de carrera</td>
            </tr>
            <tr>
              <td><kbd>Alt</kbd> (mantenida al arrastrar)</td>
              <td>Colocar una posición libremente en lugar de ajustarla a la cuadrícula</td>
              <td>Canvas del plan de carrera, arrastre con el ratón</td>
            </tr>
            <tr>
              <td><kbd>Esc</kbd></td>
              <td>Cancelar el arrastre y devolver la posición o el itinerario a su punto de partida</td>
              <td>Canvas del plan de carrera, arrastre con el ratón</td>
            </tr>
            <tr>
              <td><kbd>Esc</kbd></td>
              <td>Cancelar el formulario, vaciar sus campos y devolver el foco a su botón Add</td>
              <td>Add report, Add position, Add track, Add team</td>
            </tr>
            <tr>
              <td><kbd>Esc</kbd></td>
              <td>Cerrar el menú y devolver el foco a su botón</td>
              <td>Menú Export del plan de carrera, menú Export team page</td>
            </tr>
            <tr>
              <td><kbd>Esc</kbd></td>
              <td>Cancelar el diálogo sin actuar</td>
              <td>Cualquier diálogo de confirmación</td>
            </tr>
            <tr>
              <td><kbd>Esc</kbd></td>
              <td>Descartar el aviso</td>
              <td>Cuando el foco está dentro de un aviso, como el de actualización</td>
            </tr>
            <tr>
              <td><kbd>?</kbd></td>
              <td>Abrir esta guía de usuario en tu navegador, igual que el botón Help</td>
              <td>En cualquier parte, salvo mientras escribes en un campo; se ignora con <kbd>Ctrl</kbd>, <kbd>Cmd</kbd> o <kbd>Alt</kbd> pulsadas</td>
            </tr>
            <tr>
              <td><kbd>Tab</kbd> / <kbd>Shift</kbd> + <kbd>Tab</kbd></td>
              <td>Mover el foco hacia delante o hacia atrás; los diálogos de confirmación mantienen el foco dentro de sí mismos</td>
              <td>En todas partes</td>
            </tr>
          </tbody>
        </table>

        <p>El diálogo Preferences se cierra con su botón <strong>×</strong> o haciendo clic fuera de él.</p>
      </section>

    </article>
  </div>
</div>
