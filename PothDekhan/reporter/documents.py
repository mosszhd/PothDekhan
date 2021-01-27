from django_elasticsearch_dsl import Document
from django_elasticsearch_dsl.registries import registry
from reporter.models import Places

@registry.register_document
class PostDocument(Document):
    class Index:
        name = 'places'
        settings = {
            'number_of_shards' : 1,
            'number_of_replicas' : 0
        }

    class Django:
        model = Places
        fields = [
            'name',
            'lon',
            'lat'
        ]