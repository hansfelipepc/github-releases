import React, { PropTypes } from 'react';

import './Paginator.css';

export default PaginatedComponent => {
    class Paginator extends
    React.Component
    {
        static
        propTypes = {
            itemsPerPage: PropTypes.number.isRequired,
            data: PropTypes.arrayOf(PropTypes.object).isRequired
        };
        static
        defaultProps = {
            itemsPerPage: 8
        };
        constructor(props)
        {
            super(props);

            // Bind
            this.onClick = this.onClick.bind(this);

            this.state = {
                page: 0
            }

        }

        /**
         * Recibimos nuevas propiedades
         */
        componentWillReceiveProps(nextProps)
        {
            // Tenemos que comprobar si los datos son distintos y si seguimos viéndolos
            // por pantalla. Si no, forzamos la página a 0
            let page = this.state.page;
            if (nextProps.data.length / this.props.itemsPerPage < page) {
                page = 0;
            }

            // Comprobamos si ha cambiado algo, evitamos la re-renderizacion
            if (page !== this.state.page) {
                this.setState({page});
            }
        }
        /**
         * Actualizamos la página actual.
         */
        onClick(e, page)
        {
            // Evitamos que el link funcione
            e.preventDefault();

            // Comprobamos si ha cambiado la página y actualizamos
            if (page !== this.state.page) {
                this.setState({page});
            }
        }

        renderPagination()
        {
            let numberPages = Math.ceil(this.props.data.length / this.props.itemsPerPage),
                pages = [];
            // Create links
            if (numberPages > 1) {
                for (let i = 0; i < numberPages; i++) {
                    // Podemos agregar elementos JSX a nuestro array. Recrodad que en
                    // última instancia, son llamadas al método React.createElement
                    let cssClass = "Paginator__Page";
                    cssClass = i === this.state.page ? `${ cssClass } Paginator__Page--active` : cssClass;

                    pages.push(
                        <a href="#" className={ cssClass } key={i} onClick={(e) => this.onClick(e, i)}>
                            {i + 1}
                        </a>
                    )
                }
            }
            // Englobamos todos los elementos en uno
            return (
                <div className="Paginator__Pagination">
                    { pages }
                </div>
            )
        }

        /**
         * Obtenemos los datos que hay que mostrar
         */
        pageData()
        {
            let data = [];

            if (this.props.data.length > 0) {
                data = this.props.data.slice(this.state.page * this.props.itemsPerPage,
                    (this.state.page + 1) * this.props.itemsPerPage);
            }

            return data;
        }

        render()
        {
            // en el return para no pasar las mismas props que nos manda
            // el padre (seria la misma coleccion xd)... por eso con newProps
            // mandaremos las nuevas props con la lista filtrada (nuevas propiedades)
            let newProps = Object.assign({}, this.props, {
                data: this.pageData()
            });
            return <div className="Paginator">
                <PaginatedComponent {...newProps } />
                { this.renderPagination() }
            </div>
        }
    }
    Paginator.WrappedComponent = PaginatedComponent;
    return Paginator;
}