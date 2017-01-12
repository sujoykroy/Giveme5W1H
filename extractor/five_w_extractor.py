from extractor.extractors import action_extractor, environment_extractor, cause_extractor


class FiveWExtractor:

    preprocessor = None
    extractors = []

    def __init__(self, prep, extractorlist=None):
        self.preprocessor = prep

        if extractorlist is not None and len(extractorlist) > 0:
            self.extractors = extractorlist
        else:
            self.extractors = [
                action_extractor.ActionExtractor(),
                environment_extractor.EnvironmentExtractor(),
                cause_extractor.CauseExtractor()
            ]

    def parse(self, doc):
        self.preprocessor.preprocess(doc)

        for extractor in self.extractors:
            extractor.extract(doc)

        return doc