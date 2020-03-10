<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="Desenvolvendo tabela de despesas">
    <meta name="author" content="Wendel Fernandes">
    <title>Página de Despesas</title>

    <link rel="stylesheet" type="text/css" href="bootstrap.min.css" media="screen">    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css" />
</head>

<body>
    <header>
        <div
            class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
            <h5 class="my-0 mr-md-auto font-weight-normal">
                <img src="logo.jfif" height="30px" width="80px">
            </h5>
            <nav class="my-2 my-md-0 mr-md-3">
                <a href="#" class="p-2 text-dark">Tabela de Despesas</a>
                <a href="#" class="p-2 text-dark">Relatórios</a>
            </nav>
            <a routerlinkactive="hide-login" class="btn btn-outline-primary" href="/login">Login</a>
        </div>
    </header>
    <main>
        <div class="col-md-12 order-md1">
            <div class="card">
                <div class="card-header border-primary text-white bg-primary" style="font-weight: bold;">Despesas</div>
                <div class="card-body">
                    <div class="container animated bounceInUp">     
                        <div class="row">
                        <div class="col-md-8">
                            <table class="table table-bordered table-hover table-sm table-responsive{-sm|-md|-lg|-xl}">
                                <thead class="thead-dark">
                                    <tr>
                                        <th>Nome</th>
                                        <th>Descrição</th>
                                        <th>Valor</th>
                                    </tr>
                                </thead>
                                <tr>
                                    <td>ola</td>
                                    <td>ola</td>
                                    <td>20.00</td>
                                </tr>
                            </table>
                        </div>
                        <div class="col col-md-4">
                            <button type="button" class="btn btn-warning btn-outline-dark">Gerar Relatório</button>
                        </div>
                    </div>                
                    </div>
                </div>
            </div>
        </div>
    </main>
    <script src="jquery-3.4.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</body>

</html>
