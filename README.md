genie-router-plugin-sentry
===========================

This [genie-router](https://github.com/matueranet/genie-router) plugin monitors
for any errors occurring in the running application using [Sentry](https://sentry.io).

# Installation and configuration

Run `npm install matueranet/genie-router-plugin-sentry` in your genie-router plugin
location (default is `$HOME/.genie-router`). Add an attribute `sentry` to your `config.json`.

There is only one configuration item, the `dsn` of the configured project at sentry.io.

## Example

Replace the DSN value with the actual project DSN from sentry.io.

```
{
  "plugins": {
    "sentry": {
      "dsn": "https://******@sentry.io/<project>"
    }
  }
}
```
