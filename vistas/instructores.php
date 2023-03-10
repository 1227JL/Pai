<div class="container is-fluid mb-6">
        <h1 class="title">Instructores</h1>
        <h2 class="subtitle">Nuevo usuario</h2>
    </div>
    <div class="container pb-6 pt-6">
        <div class="form-rest mb-6 mt-6"></div>
        <form action="./php/instructor_guardar.php" method="POST" class="formularioAjax" autocomplete="off" >
            <div class="columns">
                <div class="column">
                    <div class="control">
                        <label>Nombre Completo</label>
                        <input class="input" type="text" name="instructor_nombre" pattern="[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{3,40}" maxlength="60" required >
                    </div>
                </div>
                <div class="column">
                    <div class="control">
                        <label>Cedula</label>
                        <input class="input" type="text" name="instructor_cedula" pattern="[0-9]{3,20}" maxlength="20" required >
                    </div>
                </div>
            </div>
            <div class="columns">
                <div class="column">
                    <div class="control">
                        <label>Celular</label>
                        <input class="input" type="text" name="instructor_celular" pattern="[0-9]{4,20}" maxlength="20" required >
                    </div>
                </div>
                <div class="column">
                    <div class="control">
                        <label>Titulada</label>
                        <input class="input" type="text" name="instructor_titulada"  maxlength="70" >
                    </div>
                </div>
            </div>
            <div class="columns">
                <div class="column">
                    <div class="control">
                        <label>Correo</label>
                        <input class="input" type="email" name="instructor_correo" pattern="[a-zA-Z0-9$@.-]{7,100}" maxlength="100" required >
                    </div>
                </div>
                <div class="column">
                    <div class="control">
                        <label>Jornada</label>
                        <input class="input" type="text" name="instructor_jornada" pattern="[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{3,100}" maxlength="100" required >
                    </div>
                </div>
            </div>
            <div class="columns">
            <div class="column">
                    <div class="control">
                        <label>Usuario</label>
                        <input class="input" type="text" name="instructor_usuario" pattern="[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{3,40}" maxlength="100" required >
                    </div>
                </div>  

                <div class="column">
                    <div class="control">
                        <label>Ambiente</label>
                        <input class="input" type="text" name="instructor_ambiente"  maxlength="100" >
                    </div>
                </div>
            </div>
            <div class="columns">
            <div class="column">
				<label>Rol</label><br>
                <div class="select is-rounded">
                    <select name="instructor_rol" >
                        <option value="" selected="" >Seleccione una opción</option>
                        <option value="" selected="" >Admin</option>
                        <option value="" selected="" >Instructor</option>
                        </select>
                    </div>
                </div>
                <div class="column">
				<label>Tipo de Contrato</label><br>
                <div class="select is-rounded">
                    <select name="instructor_contrato" >
                        <option value="" selected="" >Seleccione una opción</option>
                        <option value="" selected="" >Temporal de 6 meses</option>
                        <option value="" selected="" >temporal de 1 año</option>
                        </select>
                    </div>
                </div>
                
                <div class="column">
				<label>Area</label><br>
                <div class="select is-rounded">
                    <select name="instructor_area" >
                    <option value="" selected="" >Seleccione una opción</option>
                        <option value="" selected="" >Informatica</option>
                        <option value="" selected="" >Redes</option>
                        <option value="" selected="" >Talento humano</option>
                        </select>
                    </div>
                </div>

            </div>
            <div class="columns">
                <div class="column">
                    <div class="control">
                        <label>Contraseña</label>
                        <input class="input" type="password" name="instructor_clave_1" pattern="[a-zA-Z0-9$@.-]{7,100}" maxlength="100" required >
                    </div>
                </div>
                <div class="column">
                    <div class="control">
                        <label>Confirmar contraseña</label>
                        <input class="input" type="password" name="instructor_clave_2" pattern="[a-zA-Z0-9$@.-]{7,100}" maxlength="100" required >
                    </div>
                </div>
            </div>
            <p class="has-text-centered">
                <button id="send" type="submit" class="button is-info is-rounded">Guardar</button>
                
            </p>
        </form>
    </div>