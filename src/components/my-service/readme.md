# my-service

<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description | Type     | Default     |
| ----------- | ----------- | ----------- | -------- | ----------- |
| `token_api` | `token_api` |             | `string` | `undefined` |


## Events

| Event        | Description | Type                    |
| ------------ | ----------- | ----------------------- |
| `stepChange` |             | `CustomEvent<StepData>` |


## Dependencies

### Used by

 - [my-modal](../my-modal)

### Depends on

- [my-loader](../my-loader)

### Graph
```mermaid
graph TD;
  my-service --> my-loader
  my-modal --> my-service
  style my-service fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
